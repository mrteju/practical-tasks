import axios from 'axios';
import {BASE_URL, apiRoutes} from '../../utils/apiRoutes';

export const signin = loginData => {
  return axios
    .post(BASE_URL + apiRoutes.LOGIN, loginData)
    .then(res => res.data)
    .catch(err => err);
};
