import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import PrivateRoute from './shared/PrivateRoute';

function App() {
  return (
    <div className="container">
      <div className="row">
      <BrowserRouter>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register/></Route>
         <PrivateRoute path="/todolist"><TodoList></TodoList></PrivateRoute>
          <Redirect to="/register"/>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
