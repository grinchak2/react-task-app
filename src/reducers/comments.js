const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':

            console.log(action.text);


            return [
                ...state,
                {
                    name: action.text,
                    comments: []
                }
            ]
        case 'REMOVE_COMMENT':
            let index = action.id;
            state.splice(index, 1);
            return [
                ...state
            ]
        default:
            return state
    }
}

export default comments;