import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'; // look at folders

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// reducer is imported from index.js, this reducer has an initial state declared, this then affects all the components and its props since we're passing it

// okay reducer passes a certain state and action type, when we create a an action we return a type; action types can be used for a lot of reducers depending on where we add that specific action type then  will run the cases based on that action type on that reducers state(all of them will run i believe). now each state is updated and wherever we call that function for that specific state that data will appear(look at web guided day 3 todo vs form)

//reducers probably only update the states for every action type case we write in and our function or action creators tell the reducer the type of action (for the cases) and what data we are passing (whether it is the payload or api)

ReactDOM.render(
  <Provider store ={createStore(reducer)}> 
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
