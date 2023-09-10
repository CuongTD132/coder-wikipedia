import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Coder Wikimedia | Home</title>
        <meta name="keywords" content='coders' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1><br />
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br /><p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <Link href="/coders/" className="btn">
          See All Coders
        </Link> */}
        <a href="/coders/" className="btn">See All Coders</a>

        <style jsx>
          {`
          .btn {
            display: block;
            width: 150px;
            padding: 8px 0;
            margin: 20px auto;
            background: #ffbf49;
            border-radius: 4px;
            color: black;
            text-align: center;
          }
          `}
        </style>
      </div>
    </>
  )
}
