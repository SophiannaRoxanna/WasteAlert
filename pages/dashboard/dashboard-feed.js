import Head from 'next/head'
import Link from 'next/link';

import Layout from '../../components/Layout'
import Header1 from '../../components/Headers'
import { H1 } from '../../components/Text'
import { H2 } from '../../components/Text'

export default function DashboardFeed() {
  return (
      <div className="pages">
      <Head>
        <title>DashboardFeed</title>
      </Head>

      <H1 
        color="blue"
        fontSize="50px" 
      >
        Texting
      </H1>

      <H2 
        color="red"
        
      >
        Text
      </H2>

      <Header1>

      </Header1>
      </div>
  )
}

// export default function DashboardFeed() {
//   return (
//     <div>
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">
//           <a>Back to home</a>
//         </Link>
//       </h2>
//     </div>
//   )
// }