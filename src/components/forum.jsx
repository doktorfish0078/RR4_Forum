import React from 'react';
import "./forum.css";

import ThreadListItem from './ThreadListItem';
import SearchBar from './search_bar';
import { useState, useEffect } from 'react';

import {get_all_threads} from '../requests/requests'

const Forum = () => {
    const [dataThreads, setThreads] = useState([])
    useEffect(() => {
        get_all_threads().then(res => setThreads(res.data)); 
    }, []) 

    var arr_unic_theme = [];
    var dataThreadsGroupByTheme = [];
    dataThreads.forEach((thread) => {
        if(arr_unic_theme.indexOf(thread['theme']) === -1)
            arr_unic_theme.push(thread['theme'])
        
    })

    arr_unic_theme.forEach((theme, index)=> {
        dataThreadsGroupByTheme[index] = []
        dataThreads.forEach((thread) => {
            if (thread['theme'] === theme)
            dataThreadsGroupByTheme[index].push(thread);
        })
    }) //такой всратый костыль получился,я е#у

    return (
        <div className='container inner_forum'>
            <SearchBar/>
            <div className="forums">
                <h1 className='page_title'>Форумы</h1>
                {
                    dataThreadsGroupByTheme.map((threads,index) => {
                        
                        return (<ThreadType key={index} title={threads[0]['theme']} arr_discussions={threads}/>);
                    })
                }
            </div>
        </div>
    );
}

const ThreadType = ({title, arr_discussions}) => {
    return(
        <div className="thread">
            <div className="thread_type_title">{title}</div>
            <div className="thread_list">
                {
                    arr_discussions.map((thread, index) => {
                        return <ThreadListItem key={index} title={thread['title']} count_msgs={thread['count_msg']} id={thread['_id']} link={`thread/${thread['_id']}`}/>
                    })
                }

            </div>
        </div>
    )
}


export default Forum;
