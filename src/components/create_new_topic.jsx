import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';

import {create_new_topic} from '../requests/requests';

import './create_new_topic.css'

const CreateNewTopic = ({loggedUserId, isLoggedIn}) => {
    var current_date = new Intl.DateTimeFormat().format(new Date());

    var params = useParams();
    var id_thread = params['id']

    console.log(isLoggedIn)

    const [dataForm, setDataForm] = useState({
        'count_msg': 0,
        'id_thread': id_thread,
        'id_creator': loggedUserId,
        'date_create': current_date //надо фиксить, дата должна присваиваться при успешной отправке формы
    });
    const navigate = useNavigate();

    const setKeyValueDataForm = (key, value) =>{
        let clonDataForm = {...dataForm};
        clonDataForm[key] = value;
        setDataForm(clonDataForm)
    }

    const handleSumbit = (event) => {        
        navigate(`/thread/${id_thread}`)
        create_new_topic(dataForm).then(res => console.log(res.data))
    }

    const formItemChange = (e, key_name) => {
        if (dataForm === undefined){
            setDataForm({title_item: e.target.value}) 
        }
        setKeyValueDataForm(key_name,e.target.value)
    }

    return (
        isLoggedIn ?
        <div className="create_new_topic_inner">
            <form className='form_create_new_topic' onSubmit={(event) => handleSumbit(event)}>
                <div className="title_form">
                    <h2>Создать новое обсуждение</h2>
                </div>
                <input className='create_new_topic_form_input' type="text" required placeholder='Название обсуждения' 
                    onChange={(event) => formItemChange(event, 'title')}/>
                <button disabled={!isLoggedIn} className='btn_create_new_topic_form'>Создать</button>
            </form>
        </div>
        :
        <div className="create_new_topic_inner">
            <form className='form_create_new_topic'>
                Необходимо авторизоваться для того, чтобы создать новое обсуждение
            </form>
        </div>
    );
}

export default CreateNewTopic;

