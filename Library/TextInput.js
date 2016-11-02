import React, {
  Component,
} from 'react';
import ReactNative from 'react-native';

const componentStyles = ReactNative.StyleSheet.create({
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
      <ReactNative.TextInput
        {...props}
        style={this.getStyle()}
      />
    );
  }
}

TextInput.propTypes = {
  style: ReactNative.Text.propTypes.style,
};

TextInput.defaultProps = {
  style: {},
};

export default TextInput;
