import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  toolbar: {
    backgroundColor: "#2a91f5",
    height: 50,
    flexDirection: 'row'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapLL: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  goBack: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center'
  },
  toolbarLL: {
    height: 30,
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'googlesans_medium'
  }

});