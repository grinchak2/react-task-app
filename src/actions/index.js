// Tasks

export const addTask = (name) => {
    return {
        type: 'ADD_TASK',
        name
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id: id
    }
}

export const selectTask = (id) => {
    return {
        type: 'SELECT_TASK',
        id: id
    }
}

// Comments

export const addComment = (text, taskId) => {
    return {
        type: 'ADD_COMMENT',
        text: text,
        taskId: taskId
    }
}

export const removeComment = (taskId, id) => {
    return {
        type: 'REMOVE_COMMENT',
        task_id: taskId,
        id: id
    }
}