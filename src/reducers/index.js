const initialState = {
    user: {},
    isLoggedIn: false,
    userType: 'customer'
}


function mainReducer (state = initialState, action) {

    switch (action.type) {
        case 'CREATE_SESSION':
            console.log(action.data)
            return { ...initialState, ...action.data }
        case 'PROFILE':
            return { ...initialState, ...action.data }
        case 'DELETE_SESSION':
            return {  ...initialState, ...action.data}
        default:
            return { ...initialState  }
    }

}


export default mainReducer;