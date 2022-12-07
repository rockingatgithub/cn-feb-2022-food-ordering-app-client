import React, { Component } from 'react';

const FoodList = (props) => {
    return <ul>
        {props.restaurant.food.map(( food ) => <li>{food.name}</li>)}
    </ul>
} 

const RestaurantList  = (props) => {
    
        return (
            <div>
            <ul>
                {props.list.map((restaurant) => {
                    return <li>
                        <span>{restaurant.email}</span>
                        <FoodList restaurant={restaurant}  />
                    </li>
                })}
            </ul>
            </div>
        );
}

export default RestaurantList;