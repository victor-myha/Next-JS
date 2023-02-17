import { getProductData, getProductsIdArr } from '../../common/utils';
import Layout from '../../componets/layout';

export async function getStaticPaths() {
  const paths = getProductsIdArr();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function Product({ productData }) {
  return (
    <Layout>
      {productData.title}
      <br />
      {productData.id}
      <br />
      {productData.date}
    </Layout>
  );
}