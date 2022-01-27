import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render(){
    return(
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <link to={"/tutorials"} className='nav-link'>
                Tutorials
              </link>
            </li>
            <li className='nav-item'>
              <link to={"/add"} className='nav-link'>
                Add
              </link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <switch>
            <route exact path={["/","tutorials"]} component={TutorialsList}/>
            <route exact path="/add" component={AddTutorial} />
            <route path="/tutorials/:id" component={Tutorial}/>
          </switch>
        </div>
      </div>
    );
  }
}

export default App;
