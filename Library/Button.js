import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  View,
} from 'react-native';

const componentStyles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: '#333',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
});

class Button extends Component {

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  onPress(event) {
    if (!this.props.disabled) {
      this.props.onPress(event);
    } else if (this.props.onPressDisabled) {
      this.props.onPressDisabled(event);
    }
  }

  getContent() {
    const { children, isLoading } = this.props;
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    if (typeof children === 'string') {
      return <Text style={[componentStyles.textStyle, this.props.textStyle]}>{children}</Text>;
    }
    return this.props.children;
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
        style={[componentStyles.button, this.props.style]}
        underlayColor={this.props.underlayColor}
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
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func,
  onPressDisabled: PropTypes.func,
  isLoading: PropTypes.bool,
  underlayColor: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  disabled: false,
  textStyle: {},
  isLoading: false,
  underlayColor: '#222',
};

export default Button;
