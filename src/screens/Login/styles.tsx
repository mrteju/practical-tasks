import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topView: {
    flex: 0.4,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  bottomView: {
    flex: 0.6,
    marginHorizontal: 40,
    marginVertical: 30,
  },
  logoView: {
    height: 74,
    width: 130,
    padding: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  logoImg: {
    height: '100%',
    width: '100%',
  },
  iconView: {
    height: 52,
    width: 52,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 35,
  },
  iconImg: {
    height: '100%',
    width: '100%',
  },
  inputView: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 5,
  },
  fpstyle: {
    textAlign: 'right',
  },
  signin: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'rgba(33, 211, 147, 1)',
    alignSelf: 'flex-end',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  signup: {
    textAlign: 'right',
    marginTop: 10,
    color: 'black',
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  hLine: {
    height: 1,
    borderWidth: 1,
    width: '35%',
  },
});

export default styles;
