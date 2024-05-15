import axios from 'axios';
import {BASE_URL, apiRoutes} from '../../utils/apiRoutes';

export const fetchAllPost = async (page: number, limit: number) => {
  try {
    const res = await axios.get(
      BASE_URL + apiRoutes.POSTS_LIST + `?_page=${page}&_limit=${limit}`,
    );

    return res.data;
  } catch (err) {
    return err;
  }
};
