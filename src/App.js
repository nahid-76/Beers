import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer'
import './App.css';
import ShopingCart from './components/shoping-cart';
import Favorites from './components/favorites';
import Home from './components/home';
import 'react-toastify/dist/ReactToastify.css';
import NotFounf from './components/not-found';
import FavsContextProvider from './contexts/favoritescontext';
import ShopingItemsContextProvider from './contexts/shopingitemscontext';
class App extends Component {
  render() {
    return (
      <>
        <ToastContainer />
        <ShopingItemsContextProvider>
          <NavBar />
        </ShopingItemsContextProvider>
        <div className="main">
          <Switch>
            <Route path={`/favorites`}>
              <FavsContextProvider>
                <Favorites />
              </FavsContextProvider>
            </Route>
            <Route path={`/shopingCard`}>
              <ShopingItemsContextProvider>
                <ShopingCart />
              </ShopingItemsContextProvider>
            </Route>
            <Route path={`/home`} component={Home}></Route>
            <Route path={`/not-found`} component={NotFounf}></Route>
            <Redirect from={`/`} exact to={`/home`} />
            <Redirect to={`/not-found`} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
