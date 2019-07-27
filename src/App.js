import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

// *Unused imports (fow now)*
// import Post from './components/Post'
// import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <a href="/flowroom"><h3 className="brand-logo center cover">FlowRoom</h3></a>
          <Navbar />
          <Switch>
            <Route exact path='/flowroom/' component={Dashboard} />
            <Route path='/flowroom/dashboard' component={Dashboard} />
            <Route path='/flowroom/project/:id' component={ProjectDetails} />
            <Route path='/flowroom/signin' component={SignIn}/>
            <Route path='/flowroom/signup' component={SignUp}/>
            <Route path='/flowroom/about' component={About} />
            <Route path='/flowroom/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

  // *Unused paths (for now)*
  //<Route path='/flowroom/:post_id' component={Post} /> 
  //<Route render={() => <Redirect to={"/flowroom"}/>} />     

export default App;
