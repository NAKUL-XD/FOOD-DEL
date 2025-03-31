import React, { useContext,  } from "react";
import "./FoodItem.css";
import assets from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
    // Importing the StoreContext to manage cart items
    // and the functions to add or remove items from the cart

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);


    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img src={image} alt="" className="food-item-image" />
                
                {/* Show Add button if item count is 0 */}
                {!cartItems[id] 
                 ? (
                    <div className="add-button" onClick={() => addToCart(id)}>
                        <img src={assets.add_icon_white} alt="Add" />
                    </div>
                ) : (
                    <div className="food-item-counter">
                        <img 
                            src={assets.remove_icon_red} 
                            alt="Remove" 
                            onClick={() =>removeFromCart(id)} 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            src={assets.add_icon_green} 
                            alt="Add" 
                            onClick={() => addToCart(id)} 
                        />
                    </div>
                )}
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
