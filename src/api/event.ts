import request from '../utils/request'
import { API_CONTEXT } from '../constants'
import { ApiDataType } from '../types/api';


const headers = {
    Authorization: '',
}

export function getReply(params: ApiDataType) {
    return request({
        url: `${API_CONTEXT}`,
        method: 'GET',
        headers,
        params,
    });
}
