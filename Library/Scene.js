import React, { PropTypes, Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Scene extends Component {

  render() {
    return (
      <ScrollView
        {...this.props}
        style={[{
          flexGrow: 1,
        }, this.props.style]}
      >
        {this.props.children}
        <KeyboardSpacer />
      </ScrollView>
    );
  }

}

Scene.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style,
};

export default Scene;
