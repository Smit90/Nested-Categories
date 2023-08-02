const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (name, parentId) => ({
    type: ADD_CATEGORY,
    payload: {
        name,
        parentId,
    },
});
