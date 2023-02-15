import Head from 'next/head';

import Layout from '../componets/layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products');
  const { products } = await res.json();

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  return (
    <Layout home>
      <Head>
        <title>Products Home</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Products</h2>
        <ul className={utilStyles.list}>
          {products.map(({ id, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}