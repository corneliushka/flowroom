import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
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
            {/* path to delete after development finished */}
            <Route path='/flowroom/' component={Home} />
            <Route path='/flowroom/about' component={About} />
            <Route path='/flowroom/contact' component={Contact} />
            <Route path="/flowroom/:post_id" component={Post} /> {/* we'll get access to the extra information in the object automatically */}
            <Route render={() => <Redirect to={"/flowroom"}/>} />       
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
