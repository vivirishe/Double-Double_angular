var express = require('express');
var router = express.Router();

var todosController = require('../controllers/todosController');

router.route('/todos')
  .get(todosController.index)
  .post(todosController.create);
