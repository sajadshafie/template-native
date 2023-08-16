import axios from 'axios';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {context} from '../context/Context';
const {setItem, getItem, removeItem} = useAsyncStorage('usertoken');

const config = {
  myToken: () => {
    const {state, setState} = useContext(context);
    return state.token;
  },
  udata: getItem((err, item) => {
    return item;
  }),
  blankImage:
    'https://napicu.org.uk/wp-content/uploads/2020/07/Blank-Person.jpg',
  baseURL: 'http://217.144.104.71:3000/',
  baseImageURL: 'http://158.69.165.177:3000/images/',
  axiosHandle: (onProgress, isUpload) => {
    return axios.create({
      onUploadProgress: onProgress,
      baseURL: config.baseURL,
      headers: config.udata
        ? {
            'content-type': isUpload
              ? 'multipart/form-data'
              : 'application/json',
            Accept: 'application/json',
            Authorization:
              'Bearer ' + `${config.udata._W ? config.udata._W : config.udata}`,
          }
        : {
            Accept: 'application/json',
          },
    });
  },
};

export default config;
