import React, {
  Component,
  PropTypes,
} from 'react-native';

const componentStyles = React.StyleSheet.create({
  input: {
    height: 48,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
});

class TextInput extends Component {
  getStyle() {
    return [this.props.style, componentStyles.input];
  }

  render() {
    const props = {
      ...this.props,
    };
    delete props.style;
    return (
      <React.TextInput
        {...props}
        style={this.getStyle()}
      />
    );
  }
}

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'number-pad',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search',
  ]),
  secureTextEntry: PropTypes.bool,
  style: React.Text.propTypes.style,
};

TextInput.defaultProps = {
  secureTextEntry: false,
  placeholder: '',
  keyboardType: 'default',
  style: {},
};

export default TextInput;
