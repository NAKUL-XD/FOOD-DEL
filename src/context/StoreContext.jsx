import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';
import { useContext } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Function to add items to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    // Function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item doesn't exist, return previous state

            const updatedCart = { ...prev };
            if (updatedCart[itemId] === 1) {
                delete updatedCart[itemId]; // Remove item if count is 1
            } else {
                updatedCart[itemId] -= 1; // Otherwise, decrease count
            }

            return updatedCart;
        });
    };
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
               let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cartItems[item];

            }
            return totalAmount;

        }
    }
  

    const contextValue = {
        food_list,
        setCartItems,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

