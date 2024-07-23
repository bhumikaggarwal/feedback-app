import React from "react";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import AboutIconsLinks from "./components/AboutIconsLinks";
import FeedbackList from "./components/FeedbackList";
import AboutPage from "./pages/AboutPage";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


import { FeedbackProvider } from "./context/FeedbackContext";


function App(){                                                         /* stateful component*/
   
    
    return (
      <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
        <Routes>
        <Route exact path='/' element={
          <>
             <FeedbackForm />
             <FeedbackStats  />
             <FeedbackList  /> 
          </>
        }>
        
        </Route> 

      <Route path='/about'   element={<AboutPage />}/>
      
      </Routes>
      <AboutIconsLinks />
      </div>    
        </Router>
        </FeedbackProvider>
    
    )
}  

export default App ;