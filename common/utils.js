export async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const { products } = await res.json();
  return products;
}

export const getProductsIdArr = async () => {
  const products = await fetchProducts();
  return products.map(product => {
    return {
      params: {
        id: product.id,
      },
    };
  });
};

export const getProductData = async id => {
  const products = await fetchProducts();
  return products.filter(product => product.id === id);
};
