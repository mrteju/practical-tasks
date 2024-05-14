import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  navBar: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  eventItem: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  eventImgView: {
    width: 80,
    height: 80,
  },
  eventImg: {
    width: '100%',
    height: '100%',
  },
  desView: {
    marginLeft: 5,
    flex: 1,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowJItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dsName: {
    marginHorizontal: 4,
    backgroundColor: 'rgba(245, 247, 252, 1)',
    borderRadius: 25,
    paddingHorizontal: 8,
  },
  arrowImg: {
    height: 14,
    width: 14,
  },
  icImg: {
    height: '100%',
    width: '100%',
  },
  loader: {
    marginTop: 100,
  },
});

export default styles;
