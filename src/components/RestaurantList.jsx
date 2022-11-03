import React, { Component } from 'react';

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
                    </li>
                })}
            </ul>
            </div>
        );
    }
}

export default RestaurantList;