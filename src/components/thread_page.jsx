import React from 'react';
import './thread_page.css'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

import ThreadListItem from './ThreadListItem';
import SearchBar from './search_bar';

import {get_topics_by_id_thread, get_thread_by_id} from '../requests/requests'

const ThreadPage = () => {
    var params = useParams();
    var id_thread = params['id_thread']

    const [dataTopics, setDataTopics] = useState([])
    const [dataAboutThread, setDataAboutThread] = useState([])
    useEffect(() => {
        get_topics_by_id_thread(id_thread).then(res => setDataTopics(res.data)); 
        get_thread_by_id(id_thread).then(res => setDataAboutThread(res.data)); 
    }, []) 

    return (
        <div className='container inner_thread'>
            <SearchBar/>
            <div className="topics">
                <div className="thread_title">
                    <div className="title_and_btn_create">
                        <h2>{dataAboutThread['title']}</h2>
                        <Link to={`/thread/${id_thread}/create_new_topic`} className="btn_create_new_topic">Создать новое обсуждение</Link>
                    </div>
                    
                    <h3>Обсуждения:</h3>
                </div>
                <div className="topic_list">
                    {
                        dataTopics === [] ?
                        "В этом разделе форума ещё нет обсуждений"
                        :
                        dataTopics.map((topic, index) => {
                            return <ThreadListItem key={index} title={topic['title']} count_msgs={topic['count_msg']} id={topic['_id']} link={`topic/${topic['_id']}`}/>
                            })
                    }

                </div>
                </div>
            
        </div>
    );
}

export default ThreadPage;
