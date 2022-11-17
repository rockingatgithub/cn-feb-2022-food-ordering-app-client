import React, { Component } from 'react';

const FoodList = (props) => {
    return <ul>
        {props.restaurant.food.map(( food ) => <li>{food.name}</li>)}
    </ul>
} 

class RestaurantList extends Component {

    constructor(props) {
        super(props);
        this.state= {

        }
    }
    

    render() {
        return (
            <div>
            <ul>
                {this.props.list.map((restaurant) => {
                    return <li>
                        <span>{restaurant.email}</span>
                        <FoodList restaurant={restaurant}  />
                    </li>
                })}
            </ul>
            </div>
        );
    }
}

export default RestaurantList;