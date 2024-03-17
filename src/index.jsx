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

blogStore.dispatch(addBlog({
  img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/10.png?v=1670910756",
  title: "The Dev Diary Season Points Boomstick Gaming",
  desc: "Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569."
}))


blogStore.dispatch(addBlog({
  img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/9.png?v=1670910755",
  title: "Game Play Segment Video Game Blogger",
  desc: "Many jurisdictions, local as well as national, either ban gambling or heavily control it by licensing the vendors. Such regulation generally."
}))

blogStore.dispatch(addBlog({
  img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/8.png?v=1670910752",
  title: "My Game Review Yourpick Entertainment",
  desc: "Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569."
}))

blogStore.dispatch(addBlog({
  img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/7.png?v=1670910750",
  title: "The Loud Review Geek & girlty",
  desc: "There is a consensus among the ‘Ulema’ that gambling is haraam. In assertions made during its prohibition, Muslim jurists describe gambling as being."
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
