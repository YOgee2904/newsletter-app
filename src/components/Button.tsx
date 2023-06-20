import React from 'react'
import styles from '../styles/component.module.css';
import { useRouter } from 'next/navigation';
export default function Button({text, style, link}:{text: string, style?:object, link?:string | (() => void)}):JSX.Element {
  const router = useRouter();
  return (
<button onClick={()=> {if(typeof(link)==='string') router.push(link);}} className={styles.button} style={style}>{text}<span></span></button>
  )
}
