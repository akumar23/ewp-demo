import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Masthead from '../components/masthead'

export default function Home() {
  return (
    <>
      <div className='font-bold text-9xl'> Hello </div>

      <Masthead />

    </>

  )
}
