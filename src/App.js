import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import history from './utils/history'
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/project/:id' element={<ProjectDetails />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/create' element={<CreateProject/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;