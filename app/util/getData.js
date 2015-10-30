import axios from 'axios';

export default function(url) {
  return axios.get(url);
}
