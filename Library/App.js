import React, { PropTypes, Component } from 'react';

const defaultTheme = {};

class App extends Component {

  getChildContext() {
    return {
      color: this.props.theme || defaultTheme,
    };
  }

  render() {
    return this.props.children;
  }

}

App.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape({}),
};

App.contextTypes = {
  theme: React.PropTypes.object,
};

export default App;
