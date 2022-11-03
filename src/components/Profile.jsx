import React, { Component } from 'react';
import Cookies from 'js-cookie'
import AddFood from './AddFood';
import ListFood from './ListFood';
import RestaurantList from './RestaurantList';


const fetchRestaurant = async  () => {
    const fetchUsers = await fetch('http://localhost:8000/restaurant/listRestaurant', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
    })
    let parsedRes = await fetchUsers.json()
    return parsedRes
    // console.log(parsedRes)
}


class Profile extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            restaurant: []
        }
    }
    
    componentDidMount = async () => {
        let resp = await fetchRestaurant()
        this.setState({
            restaurant : resp.data
        })
    }


    render() {
        return (
            <div>
    
                Email: - {this.props.user.email}
                <AddFood client={this.props.user._id} />
                <ListFood client={this.props.user._id} />
                <RestaurantList list={this.state.restaurant} client={this.props.user._id} />
                
            </div>
        );
    }
}

export default Profile;