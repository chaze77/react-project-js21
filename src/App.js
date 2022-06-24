import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './contexts/productContext';
import Routing from './Routing';

const App = () => {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ProductContextProvider>
    
  )
};

export default App;
