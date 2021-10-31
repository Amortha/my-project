import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import ManageTour from './Component/ManageTour/ManageTour';
import AddPackage from './Component/AddPackage/AddPackage';
import NotFound from './Component/NotFound/NotFound';
import AllBooking from './Component/ManageAllBooking/AllBooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/managetour">
              <ManageTour></ManageTour>
            </PrivateRoute>
            <PrivateRoute path="/allbooking">
              <AllBooking></AllBooking>
            </PrivateRoute>
            <Route path="/addpackage">
              <AddPackage></AddPackage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
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
