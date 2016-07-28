import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicatorIOS,
} from 'react-native';
import { ActivityIndicator } from 'react-native-splat';

const componentStyles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: '#333',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
});

class Button extends Component {


  getContent() {
    const { children, isLoading } = this.props;
    if (isLoading) {
      return <ActivityIndicatorIOS />;
    }
    if (typeof children === 'string') {
      return <Text style={[componentStyles.textStyle, this.props.textStyle]}>{children}</Text>;
    }
    return this.props.children;
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[componentStyles.button, this.props.style]}
      >
        {this.getContent()}
      </TouchableHighlight>
    );
  }

}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  style: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
  isLoading: false,
};

export default Button;
