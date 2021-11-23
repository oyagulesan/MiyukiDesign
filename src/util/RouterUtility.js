import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomeComponent from '../components/HomeComponent';
import DesignComponent from '../components/DesignComponent';
import SelectionComponent from '../components/SelectionComponent';
import ContactComponent from '../components/ContactComponent';
import ResultComponent from '../components/ResultComponent';
import NavBar from './NavBar';

export default function RouterUtility() {
  return (
    <Router>
      <div className="compContainerStyle">
        <NavBar />

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
