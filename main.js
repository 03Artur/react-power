const users = [
  {
    firstName: 'Test',
    lastName: 'Testovich',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&quot;,ttps://www.kp.ru/share/i/12/10604075/ttps://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&quot',
  },

  {
    firstName: 'Ilon',
    lastName: 'Mask',
    image: 'https://image.cnbcfm.com/api/v1/image/105439429-1536353186931screen-shot-2018-09-07-at-4.45.51-pm.jpg?v=1536353260&w=1600&h=900',
  },
  {
    firstName: '',
    lastName: '',
  },
  {
    firstName: 'Jony',
    lastName: 'Depp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo-Ymw6orpXA8AGXd2Mr2tJtphj5t4Uii6YbqIdsGkk8nOplRSFh_01xZ9H4uOEUHTqA&usqp=CAU',
  },
  {
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61u07onB8yL._AC_SX466_.jpg',
  },
];

/**
 * Component - base class
 *  this.props
 *  this.state
 *  this.setState
 * createElement - create React-elem
 */

class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    const { firstName, lastName } = user;
    return (
      React.createElement(
        'article',
        {
          className: 'card',
        },
        React.createElement(
          'div',
          {
            className: 'image-wrapper',
          },
          React.createElement(
            'h3',
            {
              className: 'image-placeholder',
            },
            `${firstName[0] || ''}${lastName[0] || ''}`,
          ),
        ),
        React.createElement(
          'h1',
          {
            className: 'name',
          },
          `${firstName} ${lastName}`,
        ),
      )
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  decrement = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({
      value: value - step,
    });
  };

  increment = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({
      value: value + step,
    });
  };

  render() {
    const { value } = this.state;
    console.log('RENDER');
    return (
      React.createElement(
        'article',
        {},
        React.createElement(
          'h1',
          {
            style: {
              textAlign: 'center',
              fontSize: '60px',
            },
          },
          value,
        ),
        React.createElement(
          'div',
          {},
          React.createElement(
            'button',
            {
              onClick: this.decrement,
            },
            '-',
          ),
          React.createElement(
            'button',
            {
              onClick: this.increment,
            },
            '+',
          ),
        ),
      )
    );
  }

}

ReactDOM.render(
  users.map((user) => React.createElement(UserCard, { user })),
  document.getElementById('users'),
);

ReactDOM.render(
  React.createElement(
    Counter,
    {
      step: 18,
    },
  ),
  document.getElementById('counter'),
);


console.log(userComponents);
console.group('REACT');
console.dir(React);
console.groupEnd();

console.group('REACTDOM');
console.dir(ReactDOM);
console.groupEnd();
