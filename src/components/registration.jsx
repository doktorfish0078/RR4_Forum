import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './registration.css'

const Registration = () => {
    const [dataForm, setDataForm] = useState();

    const setKeyValueDataForm = (key, value) =>{
        let clonDataForm = {...dataForm};
        clonDataForm[key] = value;
        setDataForm(clonDataForm)
    }

    const handleSumbit = (event) => {        
        event.preventDefault();
        console.log('patay')
    }
    const formItemChange = (e, key_name) => {
        if (dataForm === undefined){
            setDataForm({title_item: e.target.value}) 
        }
        setKeyValueDataForm(key_name,e.target.value)
    }

    return (
        <div className='registration_inner container'>
            <form className='registration_form' onSubmit={(event) => handleSumbit(event)}>
                <div className="title_form">
                    <h2>Регистрация</h2>
                </div>
                <input className='registration_form_input' type="text" minLength={4} required placeholder='Никнейм' 
                    onChange={(event) => formItemChange(event, 'nickname')}/>
                <input className='registration_form_input' type="email" required placeholder='Email адрес' 
                    onChange={(event) => formItemChange(event, 'email')}/>
                <input className='registration_form_input' type="password" required minLength={6} placeholder='Пароль'
                    onChange={(event) => formItemChange(event, 'password1')}/>
                <input className='registration_form_input' type="password" required placeholder='Повторите пароль'
                    onChange={(event) => formItemChange(event, 'password2')}/>
                <button className="registration_btn_submit">Зарегестрироваться</button>
                
            </form>
        </div>
    );
}

export default Registration;
