import ReactDOM from "react-dom";
import Dashboard from "./routes/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Genre from "./routes/genre";
import MovieList from "./routes/movielist";
import Movie from "./routes/movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Header />
        <div id='main'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/genre'>
              <Genre />
            </Route>
            <Route exact path='/movie'>
              <MovieList />
            </Route>
            <Route exact path='/movie/:id'>
              <Movie />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
