import Cookies from 'js-cookie';
import React, { Component } from 'react';

class ListFood extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            food: []
        }
    }

    componentDidMount = async () => {

        
            const fetchFood = await fetch(`http://localhost:8000/food/listFood?client=${this.props.client}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${Cookies.get('user')}`
            }
            })
            let parsedRes = await fetchFood.json()

            this.setState({
                food: parsedRes.data
            })

            console.log(parsedRes)

    }
    

    render() {
        return (
            <div>
                
                <ul>
                    { this.state.food.map((foodItem) => <li>{foodItem.name}</li>) }
                </ul>

            </div>
        );
    }
}

export default ListFood;