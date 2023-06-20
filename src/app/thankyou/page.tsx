"use client"
import React from 'react'
import style from './page.module.css';
import {FaCheckCircle} from 'react-icons/fa';
import Button from 'src/components/Button';
export default function page() {
    const email= localStorage.getItem('email')?.toString()!;
    return (
    <div className={style.container}>
        <FaCheckCircle className={style.icon} size={50} color='#4caf50'/>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>{`${email?.toString()!}`}</b>. Please open it and click the button inside to confirm your subscription.</p>
      <Button link='/'style={{width: '100%', height:'100px'}}text='Dismiss Message'/>
    </div>
  )
}
