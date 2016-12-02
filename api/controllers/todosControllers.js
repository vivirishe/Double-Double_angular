var Todo = require('../models/Todos');

function index(request, response) {
  Todo.find({}, function(error, todos) {
    if(error) response.json({message: "No todos yet...?"});
    response.json({todos: todos});
  }).select('-__v');
};

function create(request, response) {
  console.log('inPOst');
  console.log('body:', request.body);
  var todo = new
  Todo(request.body);

  todo.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate criminal b/c:' + error});

    response.json({criminal: criminal});
  })
}
