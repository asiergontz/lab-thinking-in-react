import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [check, setCheck] = useState(false)

  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar search= {search} setSearch= {setSearch} check={check} setCheck={setCheck}/>
        <ProductTable products= {products} search= {search} check= {check} />
      </div>    
  )
}

export default ProductsPage