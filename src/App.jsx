import './App.css';
import Body from './componentes/body/Body';
import { useState } from 'react';


function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
  <>
  <Body allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
  />
  </>
  );
}

export default App
