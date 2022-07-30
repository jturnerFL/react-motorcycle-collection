import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home } from './components';
import './style.css';
// import { firebaseConfig } from './firebaseConfig';
// import 'firebase/auth';
// import { Provider } from 'react-reudx';
// import { store } from './redux/store';


let myTitle = "Motorcycle Inventory"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle} />
        </Route>
        <Route path='/inventory'>
          <Inventory></Inventory>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  
);


