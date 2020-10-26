import { observable, flow, action } from 'mobx';
import { errorApi } from '../utils/apiError';
import { getReply } from "../api/event"
import { ReplyList, ApiDataType } from '../types/api'

export default class ReplyStore {
    @observable replyList: ReplyList[];

    constructor() {
        this.replyList = [];
        this.getReply = this.getReply.bind(this);
    }

    public getReply = flow(function*(this: ReplyStore, params: ApiDataType) {
        try {
            const { data }: any = yield getReply(params)
            if( data.success && data.response) {
                this.replyList = data.response.items
            }
        } catch (error) {
            errorApi(error)
        }
    })

    @action getReplyData = (params:ApiDataType):void => {
        this.getReply(params)
    }
}