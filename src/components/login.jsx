import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';

import './login.css'

const Login = ({isLoggedIn, setIsLoggedIn, setloggedUserId}) => {
    const [dataForm, setDataForm] = useState();
    const Navigate = useNavigate();

    const setKeyValueDataForm = (key, value) =>{
        let clonDataForm = {...dataForm};
        clonDataForm[key] = value;
        setDataForm(clonDataForm)
    }

    const handleSumbit = (event) => {        
        if(true){
            setloggedUserId(1)
            setIsLoggedIn(true);
            Navigate('/');
        }
    }
    const formItemChange = (e, key_name) => {
        if (dataForm === undefined){
            setDataForm({title_item: e.target.value}) 
        }
        setKeyValueDataForm(key_name,e.target.value)
    }

    return (
        <div className='login_inner container'>
            <form className='login_form' onSubmit={(event) => handleSumbit(event)}>
                <div className="title_form">
                    <h2>Войти</h2>
                </div>
                <input className='login_form_input' type="email" required placeholder='Email адрес' 
                    onChange={(event) => formItemChange(event, 'email')}/>
                <input className='login_form_input' type="password" required placeholder='Пароль'
                    onChange={(event) => formItemChange(event, 'password')}/>
                <button className="login_btn_enter">Войти</button>
                <div className="reg_and_remember_pass">
                    <Link to='/registration' className="link_to_reg">Регистрация</Link>
                    <Link to='/registration' className="link_to_remember">Забыли пароль?</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
