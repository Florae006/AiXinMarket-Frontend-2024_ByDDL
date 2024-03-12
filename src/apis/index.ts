import axios from 'axios';

axios.defaults.baseURL = '';    // 配置axios请求的地址

axios.defaults.withCredentials = true;  // 允许操作localstorage和cookie
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(   // 配置请求拦截器
    config => {
        if (config.method === 'post') {
            config.data = JSON.stringify(config.data);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(    // 配置响应拦截器
    response => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    }
);

export default class API{
    static get(url: string, params: object){
        return new Promise((resolve, reject) => {
            axios.get(url, {params: params}).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    static post(url: string, params: object){
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    static put(url: string, params: object) { 
        return new Promise((resolve, reject) => {
            axios.put(url, params).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
    static delete(url: string, params: object) {
        return new Promise((resolve, reject) => {
            axios.delete(url, {params: params}).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }
}