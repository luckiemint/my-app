import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Todo from './components/Todo';
import Images from './components/Images';
import Header from './components/Header';
import { Contacts } from './components/Contacts';
import Blogs from './components/Blogs';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/images" element={<Images />} />
        <Route path="/header" element={<Header />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>

  );
}

export default App;


// BrowserRouter: It enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.
// Routes: Whenever the location changes, <Routes> looks through all its child routes to find the best match and renders that branch of the UI.
// Route: A route is a conditionally shown component that provides UI when its path matches the current URL.
// Links: The Links component creates links for different routes and implements navigation around the application. It works as an HTML anchor tag.
