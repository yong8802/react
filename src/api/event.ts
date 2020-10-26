import request from '../utils/request'
import { API_CONTEXT } from '../constants'
import { ApiDataType } from '../types/api';


const headers = {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c24iOjEwMDAxMjQsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1UifV0sImlzcyI6InJpY2hwbGFuZXQuY28ua3IiLCJ1c2VyVHlwZSI6MCwiZXhwIjoxNjM0NzAzNTMzLCJ1c2VySWQiOiJjb3JpdGVzdDAwMDFAcmljaHBsYW5ldC5rciIsImlhdCI6MTYwMzE2NzUzM30.6SScnkPiOG3l0mD9ZxQQvsysR_wEJ3yH25jPUt0h0s0C2RdBRh0-ljR6o2puLBfUa9ECXOWRMSUyVyhlCiIq3A',
}

export function getReply(params: ApiDataType) {
    return request({
        url: `${API_CONTEXT}/api/p/healthCare/upart`, // 임시 API
        method: 'GET',
        headers,
        params,
    });
}