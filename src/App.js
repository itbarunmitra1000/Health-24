

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Patients from './Components/Patients/Patients';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/patients'>
              <Patients></Patients>
            </PrivateRoute>
            <PrivateRoute path='/education'>
              <Patients></Patients>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
