import React, {useContext} from 'react';
import NavBar from './components/navbar/NavBar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Recipe from './pages/recipe/Recipe';
import Meal from './pages/meal/Meal';
import Footer from './components/Footer/Footer'
import FrequentlyAskedQuestions from "./pages/faq/FrequentlyAskedQuestions";
import Contact from "./pages/contact/Contact";
import Calories from "./pages/calories/Calories";
import './App.css';
import {AuthContext} from "./context/AuthContext";
import {
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const { auth } = useContext(AuthContext);
  return (
      <>
        <NavBar />
        <div className="page-container">
          <div className="content-wrap">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                {auth.isAuth ? <Profile /> : <Redirect to="/"/>}
              </Route>
              <Route path="/recepten">
                {auth.isAuth ? <Recipe /> : <Redirect to="/"/>}
              </Route>
              <Route path="/maaltijden">
                {auth.isAuth ? <Meal /> : <Redirect to="/"/>}
              </Route>
              <Route path="/calorieën">
                {auth.isAuth ? <Calories /> : <Redirect to="/"/>}
              </Route>
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/faq">
                <FrequentlyAskedQuestions />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <br/>
          <Footer />
        </div>
      </>
  );
}

export default App;



