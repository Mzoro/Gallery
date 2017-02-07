import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/configureStore';

import App from './components/App';
import FullPhoto from './components/FullPhoto';
import ListOfPhotos from './components/ListOfPhotos';

render((
  <Provider store={store}>
    <Router history = {history}>
      <Route path="/" component={App}>
        <IndexRoute component={ListOfPhotos}/>
        <Route path="/photo/:photoId/:nameAuthor" component={FullPhoto}/>
      </Route>  
    </Router>  
  </Provider>  
), document.getElementById('app'));
