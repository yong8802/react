import React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import ImageUploader from '../../components/imageUploader';
import ReplyStore from '../../stores/ReplyStore';
import "./index.scss";


interface IProps extends RouteComponentProps {
    replyStore: ReplyStore;
}

@inject('replyStore')
@observer
class EventPage extends React.Component<IProps> {
    constructor(props) {
        super(props)
        const { getReplyData } = this.props.replyStore;
        let params = { upKindCd: 1, type: "part"}
        getReplyData(params)
    }

    render() {
        let { replyList } = toJS(this.props.replyStore);
        console.log(replyList)
        return (
            <div className="wrapper">
                {
                    replyList.map(data => {
                        return <div key={data.cdId}>{data.cdNm}</div>
                    })
                }
                <ImageUploader />
            </div>
        )
    }
}
export default EventPage;