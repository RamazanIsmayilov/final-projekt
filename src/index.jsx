import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import './assets/sass/style.scss'
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from 'react-use-cart';
import store from './tools/store/configureStore';
import { addBlog } from './tools/action/blogAction';
import { Provider } from 'react-redux';

const blogStore = store();

// blogStore.subscribe(() => {
//   console.log(blogStore.getState());
// }) 

blogStore.dispatch(addBlog({
  cTitle: "The Dev Diary Season Points Boomstick Gaming",
  cImg: "https://gaming-workdo.myshopify.com/cdn/shop/articles/10.png?v=1670910756", cDesc: "Gambling has been a main recreational activity in Great Britain for centuriesand from social reformers"
}))


blogStore.dispatch(addBlog({
  cTitle: "Game Play Segment Video Game Blogger",
  cImg: "https://gaming-workdo.myshopify.com/cdn/shop/articles/9.png?v=1670910755", cDesc: "Many jurisdictions, local as well as national, either ban gambling or heavily control it by licensing the vendors"
}))








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <Provider store={blogStore}>
          <App />
        </Provider>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);
