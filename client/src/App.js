import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetail from './routes/RestaurantDetail';
import UpdatePage from './routes/UpdatePage';


const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/restaurants/:id/update" element={<UpdatePage />} />
              <Route
                path="/restaurants/:id/RestaurantDetail"
                element={<RestaurantDetail />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;