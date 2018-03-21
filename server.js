import express from 'express';
import bodyParser from 'body-parser';
import expressLogging from 'express-logging';
import log from 'winston';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressLogging(log));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Cache-Control');

  next();
});

app.listen(3000, () => log.info('server is running!'));

mongoose.connect('mongodb://localhost/task_manager');
const db = mongoose.connection;

db.on('error', err => log.info('connection error:', err.message));
db.once('open', () => log.info('connected to DB!'));

// Schemas
const Tasks = new Schema({
  id: { type: Schema.ObjectId, auto: true },
  summary: { type: String, required: true },
  details: { type: String }
});

const Lists = new Schema({
  title: { type: String, required: true },
  tasks: [Tasks]
});

const Boards = new Schema({
  title: { type: String, required: true },
  lists: [Lists]
});

const BoardsModel = mongoose.model('Boards', Boards);
const ListsModel = mongoose.model('Lists', Lists);
const TasksModel = mongoose.model('Tasks', Tasks);

const onGetError = (res, err) => {
  res.statusCode = 500;
  log.info('Internal error(%d): %s', res.statusCode, err.message);
  return res.send({ error: 'Server error' });
};

const onPostError = (res, err) => {
  if (err.name === 'ValidationError') {
    res.statusCode = 400;
    res.send({ error: 'Validation error' });
  } else {
    res.statusCode = 500;
    res.send({ error: 'Server error' });
  }

  log.info('Internal error(%d): %s', res.statusCode, err.message);
};

// BOARDS

app.get('/api/boards', (req, res) => BoardsModel.find((err, boards) => {
  if (!err) {
    return res.send(boards);
  }

  onGetError(res, err);
}));

app.get('/api/boards/:id', (req, res) => {
  return BoardsModel.findById(req.params.id, (err, board) => {
    if (!board) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }
    if (!err) {
      return res.send(board);
    }

    onGetError(res, err);
  });
});

app.post('/api/boards', (req, res) => {
  const board = new BoardsModel({
    title: req.body.title
  });

  board.save((err) => {
    if (!err) {
      return res.send(board);
    }

    onPostError(res, err);
  });
});

app.put('/api/boards/:id', (req, res) => {
  return BoardsModel.findById(req.params.id, (err, board) => {
    if (!board) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }

    board.title = req.body.title;

    return board.save((err) => {
      if (!err) {
        log.info('board updated');
        return res.send(board);
      }

      onPostError(res, err);
    });
  });
});

app.delete('/api/boards/:id', (req, res) => (
  BoardsModel.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.send();
  })
));


// LISTS

app.post('/api/boards/:id/lists', (req, res) => {
  const list = new ListsModel({
    title: req.body.title
  });

  BoardsModel.findById(req.params.id, (err, board) => {
    if (!board) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }

    board.lists.push(list);

    return board.save((err) => {
      if (!err) {
        log.info('board updated');
        return res.send(list);
      }

      onPostError(res, err);
    });
  });
});

// TASKS

app.post('/api/boards/:boardId/lists/:listId/tasks', (req, res) => {
  const task = new TasksModel({
    summary: req.body.summary,
    details: req.body.details
  });

  BoardsModel.findById(req.params.boardId, (err, board) => {
    board.lists.id(req.params.listId).tasks.push(task);
    return board.save((err) => {
      if (!err) {
        log.info('task added');
        return res.send();
      }
    });
  });
});

exports = {
  BoardsModel: BoardsModel,
  ListsModel: ListsModel,
  TasksModel: TasksModel
};
