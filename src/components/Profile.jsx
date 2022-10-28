import React from 'react';
import Cookies from 'js-cookie'
import AddFood from './AddFood';
import ListFood from './ListFood';

function Profile(props) {

    const fetchuser =async  () => {
        const fetchUsers = await fetch('http://localhost:8000/customer/listCustomer', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Cookies.get('user')}`
        }
        })
        let parsedRes = await fetchUsers.json()
        console.log(parsedRes)
    }

    



    return (
        <div>

            Email: - {props.user.email}

            <AddFood client={props.user._id} />
            <ListFood client={props.user._id} />
            
        </div>
    );
}

export default Profile;