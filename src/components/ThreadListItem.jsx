import {Link} from 'react-router-dom'
import './ThreadListItem.css'

const ThreadListItem = ({link, id, title, count_msgs}) => {
    return(
        <div className="discussion">
            <div className="icon_discussion">
                <i className='fa fa-comments'></i>
            </div>
            <div className="info_disscussion">
                <Link to={link} className="title_discussion">{title}</Link>
                <div className="count_msgs_in_discussion">
                    <div className="count_msgs">{count_msgs}</div>
                    <div className="msg">
                        {count_msgs === 0 ? "Сообщений" : count_msgs === 1 ? "Сообщение" : "Сообщений"  }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreadListItem;