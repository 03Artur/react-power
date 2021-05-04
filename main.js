'use strict';
const { Component } = React;

const todoItem = {
  text: 'sldflksdf',
  isDone: false,
};

class TodoListItem extends Component {
  render() {
    const { todo: { text, isDone } } = this.props;
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
          checked: isDone,
        }),
      )
    );
  }
}

class TodoList extends Component {
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

  render() {
    const { todos } = this.state;
    const todoListItems = todos.map((todo) => (
      React.createElement(TodoListItem, {
        key: todo.id,
        todo,
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

  onSubmitHandler = () => {
    alert(this.state.value);
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
  render() {
    return (
      React.createElement(
        'article',
        null,
        React.createElement(TodoForm),
        React.createElement(TodoList),
      )
    );
  }
}

ReactDOM.render(
  React.createElement(TodoApp),
  document.getElementById('root'),
);
