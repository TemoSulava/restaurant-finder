import React, {useState, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {

  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
   <RestaurantsContext.Provider value={{restaurants, setRestaurants, selectedRestaurant, setSelectedRestaurant}}>
     {props.children}
    </RestaurantsContext.Provider>
  )
}