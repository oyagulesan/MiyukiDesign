import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import HomeComponent from '../components/HomeComponent';
import DesignComponent from '../components/DesignComponent';
import SelectionComponent from '../components/SelectionComponent';
import ContactComponent from '../components/ContactComponent';
import ResultComponent from '../components/ResultComponent';

export default function RouterUtility() {
  return (
    <Router>
      <div className='navStyle'>
        <nav className='navStyle'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/selection">Selection</Link>
            </li>
            <li>
              <Link to="/design">Design</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="componentStyle">
          <Routes>
            <Route path="/selection" element={<Selection />} />
            <Route path="/design" element={<Design />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/result" element={<Result />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <HomeComponent />;
}

function Selection() {
  return <SelectionComponent />;
}

function Design() {
  return <DesignComponent />;
}

function Contact() {
  return <ContactComponent />;
}

function Result() {
  return <ResultComponent />;
}

