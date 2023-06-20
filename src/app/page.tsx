"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import {FaCheckCircle} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Button from 'src/components/Button';


export default function Home() {
  const inputEle = useRef<HTMLInputElement>(null);
  const router  = useRouter();
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
useEffect(() =>{
 inputEle.current?.focus();

}, [])
const handleChange  = (e:React.ChangeEvent<HTMLInputElement>) => {
  setInputValue( e.target.value);
  if(inputEle.current){
    setError(false);
  let el = inputEle.current;
  el.style.borderColor = "black";
  }
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  if(!inputValue && inputEle.current){
    let el = inputEle.current;
    el.style.borderColor = "red";
    setError(true);
   }else{
    localStorage.setItem('email', inputValue?.toString()!);
    router.push('/thankyou')
   }
}
  return (
   <div className={styles.container}>
    <div className={styles.item1}>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className={styles.lists}>
        <li className={styles.list}><FaCheckCircle className={styles.icon}/>Product Discovery and building what matters</li>  
        <li className={styles.list}><FaCheckCircle className={styles.icon}/>Measuring to ensure the updates are a success</li>  
        <li className={styles.list}><FaCheckCircle className={styles.icon}/>And much More!</li>  
      </ul>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor='email'>Email address</label>
      {error && <p className={styles.error}>Please enter your email</p>}
      <br />
      <input onChange={handleChange}ref={inputEle} type='email' id='email' placeholder='Enter your email' />
      <br />
      <Button text='Subscribe to monthly newsletter'/>
      </form>
   </div>
   <div className={styles.item2}>
  <Image className= {styles.image} src='/image1.webp' width={500} height={500} alt='image'/>
   </div>
   </div>
  )
}
