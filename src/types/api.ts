export interface IAxiosRequest {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    data?: any;
    params?: any;
    headers?: any;
    config?: any;
    paramsSerializer?: (param: any) => void;
}

export interface ApiDataType {
    upKindCd: number;
    type: string
}

export interface ReplyList {
    cdId: string,
    cdNm: string
}