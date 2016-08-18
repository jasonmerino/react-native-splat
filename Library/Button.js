import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  ActivityIndicatorIOS,
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


  getContent() {
    const { children, isLoading } = this.props;
    if (isLoading) {
      return (
        <View>
          <ActivityIndicatorIOS />
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
        onPress={this.props.onPress}
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
  style: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  underlayColor: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  textStyle: {},
  isLoading: false,
  underlayColor: '#222',
};

export default Button;
