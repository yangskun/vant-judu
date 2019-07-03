import axios from 'axios';
import Vue from 'vue';
import VueJsonp from 'vue-jsonp';

Vue.use(VueJsonp)

export const Hitokoto = param => {
  const sentonce = 'https://v1.hitokoto.cn/?c=' + param.type;
  return axios.get(sentonce)
    .then((res) => {
      return res.data;
    });
};

export const randomImage = () => {
  return axios.get('https://api.ixiaowai.cn/api/api.php?return=json')
    .then((res) => {
      console.log(res);
      return res;
    });
};

