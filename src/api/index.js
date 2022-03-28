import axios from 'axios';

const baseUrl = '/api/v1';

export const ListDataUnit = (data, conf) => axios.get(`${baseUrl}/units`, data, conf).then((res) => res.data);
