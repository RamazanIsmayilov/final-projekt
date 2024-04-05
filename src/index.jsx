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

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/10.png?v=1670910756",
//   title: "The Dev Diary Season Points Boomstick Gaming",
//   desc: "Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569. Horseracing has been a favorite theme for over three centuries. It has been heavily regulated.[14] Historically much of the opposition comes from Nonconformist Protestants, and from social reformers"
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/9.png?v=1670910755",
//   title: "Game Play Segment Video Game Blogger",
//   desc: "Many jurisdictions, local as well as national, either ban gambling or heavily control it by licensing the vendors. Such regulation generally leads to gambling tourism and illegal gambling in the areas where it is not allowed."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/8.png?v=1670910752",
//   title: "My Game Review Yourpick Entertainment",
//   desc: "Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569. Horseracing has been a favorite theme for over three centuries. It has been heavily regulated.[14] Historically much of the opposition comes from Nonconformist Protestants, and from social reformers."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/7.png?v=1670910750",
//   title: "The Loud Review Geek & girlty",
//   desc: "There is a consensus among the ‘Ulema’ that gambling is haraam. In assertions made during its prohibition, Muslim jurists describe gambling as being both un-Qur’anic, and as being generally harmful to the Muslim Ummah. The Arabic terminology for gambling is Maisir."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/6.png?v=1670910748",
//   title: "The Dirty Video Game World Of Nettles",
//   desc: "Arbitrage betting is a theoretically risk-free betting system in which every outcome of an event is bet upon so that a known profit will be made by the bettor upon completion of the event regardless of the outcome. Arbitrage betting is a combination of the ancient art of arbitrage trading and gambling, which has been made possible by the large numbers of bookmakers in the marketplace, creating occasional opportunities for arbitrage."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/5.png?v=1670910746",
//   title: "Last Living Man Games Game Bandits",
//   desc: "If Last Living Man Games Game Bandits is a game that was released after September 2021, I wouldn't have any specific information about it. It's always a good idea to search for the game on popular gaming websites, forums, or platforms to find more details and reviews."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/4.png?v=1670910744",
//   title: "Phantasy Star Games Show Stream",
//   desc: "Studies show that though many people participate in gambling as a form of recreation or to earn an income, gambling, like any behavior involving variation in brain chemistry, can become a behavioral addiction. Behavioral addiction can occur with all the negative consequences in a person's life minus the physical issues faced by people who compulsively engage in drug and alcohol abuse. Problem gambling has multiple symptoms. Gamblers often gamble to try to win back money they have lost, and some gamble to relieve feelings of helplessness and anxiety."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/3.png?v=1670910742",
//   title: "Gaming Magnitude Gamer Reserve",
//   desc: "Join us as we embark on thrilling gaming adventures, share valuable insights, and provide expert analysis of the latest releases, trends, and gaming industry news. Our blog is a hub for passionate gamers, whether you're a seasoned veteran or just starting your gaming journey."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/2.png?v=1670910577",
//   title: "Playful Writing Gamer Territory",
//   desc: "From a psychological perspective, such a hedge creates an interdependence dilemma – a motivational conflict between a short-term monetary gain and the long-term benefits accrued from feelings of identification with and loyalty to a position, person, or group whom the bettor desires to succeed. In economic terms, this conflicted decision can be modeled as a trade-off between the outcome utility gained by hedging and the diagnostic costs it incurs."
// }))

// blogStore.dispatch(addBlog({
//   img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/1.png?v=1670910325",
//   title: "Game Smart Lunar World Basement Playground",
//   desc: "Gambling dates back to the Paleolithic period, before written history. In Mesopotamia the earliest six-sided dice date to about 3000 BCE. However, they were based on astragali dating back thousands of years earlier. In China, gambling houses were widespread in the first millennium BCE, and betting on fighting animals was common. Lotto games and dominoes (precursors of Pai Gow) appeared in China as early as the 10th century."
// }))

// [
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/10.png?v=1670910756",
//     title: "The Dev Diary Season Points Boomstick Gaming",
//     desc: "Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569. Horseracing has been a favorite theme for over three centuries. It has been heavily regulated.[14] Historically much of the opposition comes from Nonconformist Protestants, and from social reformers"
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/9.png?v=1670910755",
//     title: "Game Play Segment Video Game Blogger",
//     desc: "Many jurisdictions, local as well as national, either ban gambling or heavily control it by licensing the vendors. Such regulation generally leads to gambling tourism and illegal gambling in the areas where it is not allowed."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/8.png?v=1670910752",
//     title: "My Game Review Yourpick Entertainment",
//     desc: "Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569. Horseracing has been a favorite theme for over three centuries. It has been heavily regulated.[14] Historically much of the opposition comes from Nonconformist Protestants, and from social reformers."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/7.png?v=1670910750",
//     title: "The Loud Review Geek & girlty",
//     desc: "There is a consensus among the ‘Ulema’ that gambling is haraam. In assertions made during its prohibition, Muslim jurists describe gambling as being both un-Qur’anic, and as being generally harmful to the Muslim Ummah. The Arabic terminology for gambling is Maisir."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/6.png?v=1670910748",
//     title: "The Dirty Video Game World Of Nettles",
//     desc: "Arbitrage betting is a theoretically risk-free betting system in which every outcome of an event is bet upon so that a known profit will be made by the bettor upon completion of the event regardless of the outcome. Arbitrage betting is a combination of the ancient art of arbitrage trading and gambling, which has been made possible by the large numbers of bookmakers in the marketplace, creating occasional opportunities for arbitrage."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/5.png?v=1670910746",
//     title: "Last Living Man Games Game Bandits",
//     desc: "If Last Living Man Games Game Bandits is a game that was released after September 2021, I wouldn't have any specific information about it. It's always a good idea to search for the game on popular gaming websites, forums, or platforms to find more details and reviews."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/4.png?v=1670910744",
//     title: "Phantasy Star Games Show Stream",
//     desc: "Studies show that though many people participate in gambling as a form of recreation or to earn an income, gambling, like any behavior involving variation in brain chemistry, can become a behavioral addiction. Behavioral addiction can occur with all the negative consequences in a person's life minus the physical issues faced by people who compulsively engage in drug and alcohol abuse. Problem gambling has multiple symptoms. Gamblers often gamble to try to win back money they have lost, and some gamble to relieve feelings of helplessness and anxiety."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/3.png?v=1670910742",
//     title: "Gaming Magnitude Gamer Reserve",
//     desc: "Join us as we embark on thrilling gaming adventures, share valuable insights, and provide expert analysis of the latest releases, trends, and gaming industry news. Our blog is a hub for passionate gamers, whether you're a seasoned veteran or just starting your gaming journey."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/2.png?v=1670910577",
//     title: "Playful Writing Gamer Territory",
//     desc: "From a psychological perspective, such a hedge creates an interdependence dilemma – a motivational conflict between a short-term monetary gain and the long-term benefits accrued from feelings of identification with and loyalty to a position, person, or group whom the bettor desires to succeed. In economic terms, this conflicted decision can be modeled as a trade-off between the outcome utility gained by hedging and the diagnostic costs it incurs."
//   },
//   {
//     img: "https://gaming-workdo.myshopify.com/cdn/shop/articles/1.png?v=1670910325",
//     title: "Game Smart Lunar World Basement Playground",
//     desc: "Gambling dates back to the Paleolithic period, before written history. In Mesopotamia the earliest six-sided dice date to about 3000 BCE. However, they were based on astragali dating back thousands of years earlier. In China, gambling houses were widespread in the first millennium BCE, and betting on fighting animals was common. Lotto games and dominoes (precursors of Pai Gow) appeared in China as early as the 10th century."
//   }
// ]




const result = (
    <CartProvider>
      <WishlistProvider>
        <ProductProvider>
          <ModeProvider>
            <LangProvider>
              <Provider store={blogStore}>
                <App />
              </Provider>
            </LangProvider>
          </ModeProvider>
        </ProductProvider>
      </WishlistProvider>
    </CartProvider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

blogStore.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})
