import ReplyStore from './ReplyStore';

class RootStore {
    replyStore: ReplyStore;

    constructor() {
        this.replyStore = new ReplyStore();
    }
}

export default new RootStore();