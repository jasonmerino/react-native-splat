'use strict';

import React, {
	Component,
	PropTypes,
} from 'react';
import {
	TextInput,
	Text,
} from 'react-native';

const componentStyles = StyleSheet.create({
	input: {
		height: 40,
		padding: 10,
		borderRadius: 3,
		backgroundColor: '#fff',
	},
});

class TextInput extends Component {

	render() {
		const {
			onChangeText,
			placeholder,
			keyboardType,
			value,
		} = this.props;
		return (
			<TextInput
				placeholder={placeholder}
				value={value}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
				style={[componentStyles.input, componentStyles.passwordInput]}
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
	style: Text.propTypes.style,
};

TextInput.defaultProps = {
	placeholder: '',
	keyboardType: 'default',
};

export default TextInput;