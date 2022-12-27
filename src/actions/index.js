import Cookies from 'js-cookie';
export const setCounter = (num) => {
    return {
        type: 'SET_COUNTER',
        data: num
    }
}

const setProfile = () => {

    return async (dispatch, getState) => {

        const res = await fetch('http://localhost:8000/profile', {
            headers: {
            'Authorization': `Bearer ${Cookies.get('user')}`
            }
        })
        const parsedRes = await res.json()

        const data = {
            user: parsedRes.user,
            isLoggedIn: true
        }
        dispatch(setUser(data))

    }

}


export default setProfile;

export const createSession = (user, userType, type) => {

    return async (dispatch, getState) => {

        let res = await fetch(`http://localhost:8000/${userType}/${type}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })

        let parsedRes = await res.json()
        console.log(parsedRes)

        if(parsedRes.message === "Success"){

            if(window) {
                document.cookie = 'user=' + parsedRes.token
            }
            const data = {
                user: parsedRes.data,
                isLoggedIn: true
            }
            dispatch(setUser(data))
        }

    }

}

export const deleteSession = () => {

    Cookies.remove('user')
    const data = {
        user: {},
        isLoggedIn: false
    }
    return {
        data,
        type: 'DELETE_SESSION'
    }

}

export const setUser = (data) => {
    return {
        data,
        type: 'CREATE_SESSION'
    }
}