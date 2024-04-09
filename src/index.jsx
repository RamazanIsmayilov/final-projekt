import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import './assets/sass/style.scss'
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from "react-use-wishlist"
import store from './tools/store/configureStore';
import { getBlogsFromDatabase } from './tools/action/blogAction';
import { Provider } from 'react-redux';
import { ModeProvider } from './context/ModeContext';
import { LangProvider } from './context/LangContext';

const blogStore = store();

const result = (
  <Provider store={blogStore}>
    <CartProvider>
      <WishlistProvider>
        <ProductProvider>
          <ModeProvider>
            <LangProvider>
              <App />
            </LangProvider>
          </ModeProvider>
        </ProductProvider>
      </WishlistProvider>
    </CartProvider>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

blogStore.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})
