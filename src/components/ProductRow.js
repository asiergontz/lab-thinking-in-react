import React from 'react';

function ProductRow({singleProduct}) {
  return (
    <tr key={singleProduct.id}>
      {singleProduct.inStock ? (
        <td>{singleProduct.name}</td>
      ) : (
        <td style={{ color: 'red' }}>{singleProduct.name}</td>
      )}
      <td>{singleProduct.price}</td>
    </tr>
  );
}
export default ProductRow;
