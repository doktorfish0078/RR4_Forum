import React from 'react';
import './topic_page.css'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useState , useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';

import {create_new_msg, get_msgs_by_id_topic, get_topic_by_id} from '../requests/requests';

import SearchBar from './search_bar';

const TopicPage = ({loggedUserId, isLoggedIn}) => {
    var current_date = new Intl.DateTimeFormat().format(new Date());

    var params = useParams();
    var nagivate = useNavigate();
    var id_thread = params['id_thread'];
    var id_topic = params['id_topic'];
    
    const [dataMsgs, setDataMsgs] = useState([]);
    const [dataAboutTopic, setDataAboutTopic] = useState([]);
    const [dataForm, setDataForm] = useState({
        'id_thread': id_thread,
        'id_topic': id_topic,
        'id_creator': loggedUserId,
        'date_create': current_date //надо фиксить, дата должна присваиваться при успешной отправке формы
    });

    useEffect(() => {
        get_topic_by_id(id_topic).then(res => setDataAboutTopic(res.data)); 
        get_msgs_by_id_topic(id_topic).then(res => setDataMsgs(res.data)); 
    }, []) 

    const setKeyValueDataForm = (key, value) =>{
        let clonDataForm = {...dataForm};
        clonDataForm[key] = value;
        setDataForm(clonDataForm)
    }

    const handleSumbit = (event) => {        
        if(dataForm !== undefined){
            create_new_msg(dataForm).then(res => console.log(res.data))
        }
    }
    const formItemChange = (e, key_name) => {
        if (dataForm === undefined){
            setDataForm({title_item: e.target.value}) 
        }
        setKeyValueDataForm(key_name,e.target.value)
    }

    return (
        <div className='container topic_container'>
            <SearchBar/>
            <div className="inner_topic">
                <div className="title_topic">
                    <h2>{dataAboutTopic['title']}</h2>
                    <HashLink to={'#send_msg_form'} className="btn_new_msg">Написать</HashLink>
                </div>
                <Paginator/>
                <div className="message_list">
                    {
                        dataMsgs.map((msg, index) => {
                            return <Message key={index} text={msg['text']} date_create={msg['date_create']}/>
                        })
                    }
                    
                </div>
                <Paginator/>
                <a id={'send_msg_form'}></a>
                {
                    isLoggedIn ?
                    <Textarea handleSumbit={handleSumbit} formItemChange={formItemChange}/>
                    :
                    "Авторизируйтесь, чтобы писать сообщения"
                }
                
            </div>
        </div>
    );
}


const Message = ({text, date_create}) => {
    // var formating_text = text.replace(/[\n\r]/g, "&lt;br&gt;") // сделать так, чтобы было форматирование из textarea
    return (
        <div className='message_item'>
            <div className="about_author_msg">
                <div className="author_msg_name">NAME</div>
                <div className="author_avatar">
                    <img src="https://rf4game.ru/forum/uploads/monthly_2017_05/99px_ru_avatar_48488_90x90.thumb.jpg.aa1af04840c9cc7745582f0010d8c37e.jpg" alt="" />
                </div>
                <div className="author_status">Админ</div>
            </div>
            <div className="about_msg">
                <div className="date_publish">
                    Опубликовано {date_create}
                </div>
                <div className="text_msg">
                    {text}
                </div>
            </div>
        </div>
    );
}

const Paginator = () => {
    return (
        <div className="page_bar">
            <div className="page_bar_btn page_bar_btn_active">1</div>
            <div className="page_bar_btn ">2</div>
            <div className="page_bar_btn">{"Далее >>"}</div>

            <div className="page_bar_info">Страница 1 из 2</div>
        </div>
    );
}

const Textarea = ({handleSumbit,formItemChange}) => {
    return (
        <form className="textarea" id={"#send_msg_form"} onSubmit={(event) => handleSumbit(event)}>
            <h3>Отправить сообщение</h3>
            <div className="text_buff_bar">
            </div>
            <textarea placeholder='Текст вашего сообщения...' onChange = {(event) =>formItemChange(event,'text')}>

            </textarea>
            <div className="menu_btn_submit">
                <button className='msg_send_btn_submit'>Отправить</button>
            </div>
        </form>
    );
}


export default TopicPage;
