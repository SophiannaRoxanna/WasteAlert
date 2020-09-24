import styles from '../pages/_app'
import Link from 'next/link'

function Header1({ children }) {
  return <div className={styles.pages}>{children}
 
   <h1 className={styles.card}>
      Read <Link href="/"><a>this page!</a></Link>
    </h1>
    <p className="mt-20">
      Listen to the stories
    </p>
    </div>
}

export default Header1