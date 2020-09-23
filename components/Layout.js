import styles from '../styles/layout.module.css'
import Link from 'next/link'

function Layout({ children }) {
  return <div className={styles.container}>{children}
 
   <h1 className={styles.title}>
      Read <Link href="/pages/index.js"><a>this page!</a></Link>
    </h1>
    </div>
}

export default Layout