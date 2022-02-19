import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Auth/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './Page/Welcome';
import Home from './Page/Home';
import CourseForm from './Page/CourseForm';
import ProgramCreate from './Page/ProgramCreate';
import Summary from './Page/Summary';
import SuccessPage from './Page/SuccessPage';
import Coursefeed from './Page/Coursefeed';
import Index from './Page/Admin/Index';
import ACreateCourse from './Page/Admin/ACreateCourse';
import AUpdateCourse from './Page/Admin/AUpdateCourse';
import ASuccessPage from './Page/Admin/ASuccessPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/admin/index">
            <Index/>
          </Route>
          <Route exact path="/admin/create-course">
            <ACreateCourse/>
          </Route>
          <Route exact path="/admin/update-course">
            <AUpdateCourse/>
          </Route>
          <Route exact path="/admin/success">
            <ASuccessPage/>
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/addcourse">
            <CourseForm />
          </Route>
          <Route exact path="/programcreate">
            <ProgramCreate />
          </Route>
          <Route exact path="/summary">
            <Summary />
          </Route>
          <Route exact path="/successpage">
            <SuccessPage />
          </Route>
          <Route exact path="/coursefeed">
            <Coursefeed />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
