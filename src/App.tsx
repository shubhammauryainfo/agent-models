import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
      <Router>
        <div>
          <Routes>
        
            <Route path="/" element={<Home />} />
        

{/*         
             <Route path="/home"
              element={
                <Auth>
                  <Home />
                </Auth>
              } />  */}
          
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;