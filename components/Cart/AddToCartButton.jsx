import { useState, useContext } from 'react';

import { AppContext } from 'utils/context/AppContext';

const AddToCartButton = (props) => {
  console.log('Add to cart button: ');
  console.log(props);

  const { product } = props;
  const [cart, setCart] = useContext(AppContext);

  const {
    description,
    image,
    name,
    onSale,
    productId,
    price,
    regularPrice,
    salePrice,
  } = props.product.products.edges[0].node;

  const handleAddToCartClick = () => {
    // If component is rendered on the client side
    if (process.browser) {
      let existingCart = localStorage.getItem('woocommerce-cart');
      if (existingCart) {
      } else {
        //const NewCart = addFirstProduct(props)
        setCart(product)
      }
    }
  };

  return (
    <>
      <button
        onClick={handleAddToCartClick()}
        className="px-4 py-2 font-bold bg-white border border-gray-400 border-solid rounded hover:bg-gray-400"
      >
        KJØP
      </button>
    </>
  );
};

export default AddToCartButton;
