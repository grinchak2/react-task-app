const task = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                name: action.name,
                active: false,
                comments: []
            }
        default:
            return state
    }
}

const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                task(undefined, action)
            ]
        case 'REMOVE_TASK':
            let index = action.id;
            
            return state.filter((item, idx) => idx !== index);
        case 'SELECT_TASK':
            return state.map((value, index) => {
                if (index === parseInt(action.id, 10)) {
                    value.active = true;
                } else {
                    value.active = false;
                }

                return value;
            })
        case 'ADD_COMMENT':
            let comment = {
                text: action.text
            }

            return state.map((value, index) => {
                if (index === parseInt(action.taskId, 10)) {
                    value.comments.push(comment);
                }

                return value;
            })
        default:
            return state
    }
}

export default tasks;