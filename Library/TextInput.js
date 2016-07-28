import React, {
  PropTypes,
} from 'react';
import ReactNative from 'react-native';

const componentStyles = StyleSheet.create({
  input: {
    height: 48,
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
});

const TextInput = () => {
  const {
    onChangeText,
    placeholder,
    keyboardType,
    value,
  } = this.props;
  return (
    <ReactNative.TextInput
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      style={[componentStyles.input, componentStyles.passwordInput]}
    />
  );
};

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
  style: ReactNative.Text.propTypes.style,
};

TextInput.defaultProps = {
  placeholder: '',
  keyboardType: 'default',
};

export default TextInput;
