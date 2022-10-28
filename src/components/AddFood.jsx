import React, { Component } from 'react';
import Cookies from 'js-cookie';

class AddFood extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

            foodName: '',
            foodPrice: 0,
            foodRating: 5

        }
    }

    foodNameHandler = (event) => {

        this.setState({
            foodName: event.target.value
        })

    }

    foodPriceHandler = (event) => {

        this.setState({
            foodPrice: event.target.value
        })

    }

    foodRatingHandler = (event) => {

        this.setState({
            foodRating: event.target.value
        })

    }

    submitHandler = async (event) => {
        
        const { foodName: name , foodPrice : price, foodRating:rating } = this.state

        event.preventDefault()

        const food = {
            name,
            price : parseInt(price),
            rating : parseInt(rating),
            client: this.props.client
        }

        let res = await fetch(`http://localhost:8000/food/addFood`, {
            method: 'POST',
            body: JSON.stringify(food),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('user')}`
              }
        })

        let parsedRes = await res.json()
        console.log(parsedRes)

        if(parsedRes.message === "Success"){

        }

    }
    

    render() {
        return (
            <div>

            <h1>Add Food</h1>

            <form onSubmit={this.submitHandler}>

                Name:- <input type="text" value={this.state.foodName} onChange={this.foodNameHandler} />
                Price:-  <input type="number" value={this.state.foodPrice} onChange={this.foodPriceHandler} />
                Rating:- <input type="number" value={this.state.foodRating} onChange={this.foodRatingHandler} />

                <button type='submit'> Submit </button>

            </form>
                
            </div>
        );
    }
}

export default AddFood;