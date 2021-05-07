'use strict';
const { Component } = React;

const todoItem = {
  text: 'sldflksdf',
  isDone: false,
};

const TodoListItem = (props) => {
  const { todo: { text, isDone }, onToggleTodo } = props;
  return (
    React.createElement(
      'li',
      {
        style: {
          textDecoration: isDone ? 'line-through' : 'initial',
          color: isDone ? 'gray' : 'initial',
        },
      },
      text,
      React.createElement('input', {
        type: 'checkbox',
        onChange: onToggleTodo,
      }),
    )
  );
};

function TodoList(props) {
  const { todos, toggleTodo } = props;
  const todoListItems = todos.map((todo, index) => (
    React.createElement(TodoListItem, {
      key: todo.id,
      todo,
      onToggleTodo: () => toggleTodo(index),
    })
  ));
  return (
    React.createElement(
      'ul',
      null,
      todoListItems,
    )
  );
}

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeHandler = (e) => {
    const { target: { value } } = e;
    this.setState({
      value,
    });
    e.stopPropagation();
  };

  onSubmitHandler = (e) => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit({
      id: `${Date.now()}-${Math.random()}`,
      isDone: false,
      text: value,
    });
    e.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      React.createElement(
        'form',
        {
          onSubmit: this.onSubmitHandler,
        },
        React.createElement(
          'input',
          {
            name: 'todo',
            type: 'text',
            value,
            placeholder: 'todo text',
            onChange: this.onChangeHandler,
          },
        ),
        React.createElement(
          'button',
          {
            type: 'submit',
          },
          'Add',
        ),
      )
    );
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Todo item 1',
          isDone: false,
        },
        {
          id: 2,
          text: 'sdfasdasd 2',
          isDone: true,
        },
        {
          id: 3,
          text: 'sdfasdasd 3',
          isDone: false,
        },
        {
          id: 4,
          text: 'sdasdfasd 4',
          isDone: false,
        },
        {
          id: 5,
          text: 'sdfassdfsfhd 5',
          isDone: true,
        },
        {
          id: 6,
          text: 'sdfasd 6',
          isDone: false,
        },
      ],
    };
  }

  toggleTodo = (index) => {
    const { todos } = this.state;
    const newTodos = [...todos];

    newTodos[index] = {
      ...todos[index],
      isDone: !todos[index].isDone,
    };

    this.setState({
      todos: newTodos,
    });
  };

  addTodo = (todo) => {
    const { todos } = this.state;
    this.setState({
      todos: [todo, ...todos],
    });
  };

  render() {
    const { todos } = this.state;

    return (
      React.createElement(
        'article',
        null,
        React.createElement(TodoForm, {
          onSubmit: this.addTodo,
        }),
        React.createElement(TodoList, { todos, toggleTodo: this.toggleTodo }),
      )
    );
  }
}

ReactDOM.render(
  React.createElement(TodoApp),
  document.getElementById('root'),
);
