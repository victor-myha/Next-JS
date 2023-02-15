import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../componets/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  )
}
