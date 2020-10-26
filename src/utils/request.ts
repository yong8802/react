import axios from 'axios';
import qs from 'qs';
import { IAxiosRequest } from '../types/api';

export default function request(obj: IAxiosRequest) {
    const { url, method, config } = obj;
    let { headers, params, paramsSerializer } = obj;
    let data: any;

    if(method === "GET") {
        if (!paramsSerializer) {
            paramsSerializer = objParams => {
              return qs.stringify(objParams, { arrayFormat: 'repeat', skipNulls: true });
            };
          }
    } else {
        data = params ? qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true }) : undefined;
        params = undefined;
        if (!headers || !headers['Content-Type']) {
            headers = {
                ...headers,
                'Content-Type': 'application/x-www-form-urlencoded',
            };
        }
    }


    return axios({
        method, url, data, params, headers, paramsSerializer, ...config
    }).then((response:any) => {
        if (response.status !== 200) {
            throw response;
        }
        return response;
    }).catch((error:any) => {
        return Promise.reject(error);
    }).finally(() => {
    })
}