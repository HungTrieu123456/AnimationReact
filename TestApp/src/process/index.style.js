import {
    StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
  	height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center',
  	width: 100,
    height: 100,
    marginLeft: 100,
    backgroundColor: 'red'
    
  },

  text: {
      marginTop: 100,
      color: 'black'
  }
});