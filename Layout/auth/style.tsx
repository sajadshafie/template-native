import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 80,
    justifyContent: 'space-between',
    // backgroundColor: "red",
  },
  logo: {
    width: 100,
    height: 100,
  },
  blur_container: {
    // height: 400,
    width: '100%',
    backgroundColor: 'rgba(145, 145, 145,0.5)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    // borderTopColor: "black",
  },
  container_content: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    padding: 15,
  },
  border_top: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: -1,
    marginBottom: -47,
  },
});
