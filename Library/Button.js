import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  View,
} from 'react-native';
import theme from '../themeConfig';

const componentStyles = StyleSheet.create({
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
});

class Button extends Component {

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.getThemeButtonStyle = this.getThemeButtonStyle.bind(this);
    this.getTheme = this.getTheme.bind(this);
  }

  onPress(event) {
    if (!this.props.disabled) {
      this.props.onPress(event);
    } else if (this.props.onPressDisabled) {
      this.props.onPressDisabled(event);
    }
  }

  getTheme() {
    if (this.context.theme && this.context.theme.button) {
      return this.context.theme.button;
    }
    return theme.button;
  }

  getThemeButtonStyle() {
    const {
      buttonHeight,
      buttonBackgroundColor,
      buttonRadius,
    } = this.getTheme();
    return {
      height: buttonHeight,
      backgroundColor: buttonBackgroundColor,
      justifyContent: 'center',
      borderRadius: buttonRadius,
    };
  }

  renderContent() {
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
        style={[this.getThemeButtonStyle(), this.props.style]}
        underlayColor={this.props.underlayColor}
      >
        {this.renderContent()}
      </TouchableHighlight>
    );
  }

}

Button.contextTypes = {
  theme: PropTypes.object,
};

Button.propTypes = {
  /**
   * Pass text as child or other component
   */
  children: PropTypes.node,
  /**
   * Disable button
   */
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  /**
   * Function to call when button is pressed
   */
  onPress: PropTypes.func,
  onPressDisabled: PropTypes.func,
  /**
   * Toggle loading state with `isLoading`.
   * Child component or child text will not show while loading.
   */
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
