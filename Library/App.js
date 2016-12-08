import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';

const defaultTheme = {};

class App extends Component {

  getChildContext() {
    return {
      theme: this.props.theme || defaultTheme,
    };
  }

  render() {
    return <View>{this.props.children}</View>;
  }

}

App.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape({}),
};

App.childContextTypes = {
  theme: React.PropTypes.shape({}),
};

export default App;
