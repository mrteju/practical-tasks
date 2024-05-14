import axios from 'axios';
import {BASE_URL, apiRoutes} from '../../utils/apiRoutes';

export const fetchAllEvents = () => {
  return axios
    .post(BASE_URL + apiRoutes.EVENT_LIST)
    .then(res => res.data)
    .catch(err => err);
};
