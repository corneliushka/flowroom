import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h3 className="brand-logo center cover">FlowRoom</h3>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} /> {/* we'll get access to the extra information in the object automatically */}       
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
