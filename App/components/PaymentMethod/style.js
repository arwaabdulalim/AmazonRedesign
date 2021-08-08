import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  deliveryView: {
    flexDirection: 'row',
    marginLeft: (width * 5.5) / 100,
    alignItems: 'center',
    marginTop: (height * 1) / 100,
  },
  deliveryText: {
    color: '#3c4d61',
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: (width * 2.5) / 100,
  },
  addressView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: (height * 2) / 100,
    marginVertical: (height * 1) / 100,
    paddingHorizontal: (height * 2) / 100,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
    height: (height * 5) / 100,
    width: (width * 90) / 100,
    shadowColor: 'gray',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  address: {
    color: '#3c4d61',
    fontSize: 14,
    fontWeight: '500',
  },
  cardContainer: {justifyContent: 'center', alignItems: 'center'},
  card: {
    height: (height * 30) / 100,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 95,
    right: 90,
    left: 90,
  },
});
export default styles;
