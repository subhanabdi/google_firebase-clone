import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import SearchResult from './pages/SearchResult/SearchResult';
import { initializeApp } from "firebase/app";



const firebaseConfig = {

  apiKey: "AIzaSyBnEQS1hKMTyOE4RTgbAVUDBjcjWbbp5DY",

  authDomain: "clone-6843c.firebaseapp.com",

  projectId: "clone-6843c",

  storageBucket: "clone-6843c.appspot.com",

  messagingSenderId: "581372397248",

  appId: "1:581372397248:web:487f2a14c886beb4a98f25"

};

const app = initializeApp(firebaseConfig);

import './App.css';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          {/* Home (the one with the search on) */}
          <Route path="/" exact>
            <Home />
          </Route>

          {/* SearchPage (The results page) */}
          <Route path="/search">
            <SearchResult />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;