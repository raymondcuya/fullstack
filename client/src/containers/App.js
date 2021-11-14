import './App.css';
import ProductList from '../components/ProductList';
import { useEffect, useState } from 'react';
import { apiCall } from '../api/api';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState(8);
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiCall(`/products?page=${page}&size=${size}`).then((data) => {
      setProducts(data.products);
      setTotal(data.totalProducts);
    });
  }, [size, page]);

  const onSizeChange = (event) => {
    console.log('onsize change', event.target.value);
    setSize(event.target.value);
  };

  const onPageChange = (event) => {
    console.log('onpage change', event.selected + 1);
    setPage(event.selected + 1);
  };

  return (
    <div>
      <Header size={size} total={total} sizeChange={onSizeChange}></Header>
      <ProductList products={products} />
      <Pagination
        size={size}
        total={total}
        paginate={onPageChange}
      ></Pagination>
    </div>
  );
}

export default App;
