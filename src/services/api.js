// export const fetchProducts = async () => {
//     const response = await fetch('api/products');
//     return response.json();
//   };
  
export const fetchProducts = async () => {
  const response = await fetch('/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};

export const fetchUserData = async () => {
  const response = await fetch('/mockUserData.json');
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  const data = await response.json();
  return data;
};
