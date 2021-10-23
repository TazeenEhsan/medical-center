import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appoinment from './Pages/Appoinment/Appoinment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DetailedService from './Pages/Home/DetailedService/DetailedService';





function App() {
  return (
    <div className="App ">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/detailedservice/:serviceId">
              <DetailedService></DetailedService>
            </PrivateRoute>

            <Route exact path="/Doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
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
