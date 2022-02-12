import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import { LoginForm } from '../../components/login/login.com';

import "./entry.style.css";
import { useState } from 'react';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';


export const Entry = () => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const[frmLoad, setFrmLoad] = useState("login")

    const handleOnChange= e =>{
        const {name,value} = e.target

        switch(name){
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            
            default:
                break;
        }
    };

    const handleOnSubmit = e =>{
        e.preventDefault()

        if(!email || !password){
           return alert("fill up all the form!");
        }
        //1000 call api to submit the form
        console.log(email, password);
    };

    const handleOnResetSubmit = e =>{
        e.preventDefault()

        if(!email ){
           return alert("please enter the email!");
        }
        //1000 call api to submit the form
        console.log(email);
    };

    const frmSwitcher = (frmType) =>{
        setFrmLoad(frmType)
    };

  return (
    <div className='entry-page bg-info'>
      <Modal.Dialog className='form-box'>
          {frmLoad==='login'&& <LoginForm 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        frmSwitcher={frmSwitcher}
        email={email}
        pass={password}
        />}
         {frmLoad==='reset'&& <ResetPassword 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        frmSwitcher={frmSwitcher}
        email={email}
        />}
        </Modal.Dialog>    
    </div>
    
  )
};
