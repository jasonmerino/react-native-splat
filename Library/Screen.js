import React, {
  PropTypes,
  ScrollView,
} from 'react-native';

// const componentStyles = StyleSheet.create({
//   button: {
//     height: 48,
//     backgroundColor: '#333',
//     justifyContent: 'center',
//     borderRadius: 3,
//   },
//   textStyle: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

const Screen = () => (
  <ScrollView>
    {this.props.children}
  </ScrollView>
);

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Screen.defaultProps = {
};

export default Screen;
