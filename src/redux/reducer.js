import { generateUniqueId } from "../utils";

export const initialState = [];

export const ADD_CATEGORY = 'ADD_CATEGORY';

const findCategoryById = (categories, id) => {
    for (const category of categories) {
        if (category.id === id) {
            return category;
        }
        if (category.children) {
            const found = findCategoryById(category.children, id);
            if (found) {
                return found;
            }
        }
    }
    return null;
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            const newCategory = {
                id: generateUniqueId(),
                name: action.payload.name,
                children: [],
            };

            if (action.payload.parentId) {
                const parentCategory = findCategoryById(state, action.payload.parentId);
                parentCategory.children.push(newCategory);
            } else {
                state.push(newCategory);
            }

            return [...state];

        default:
            return state;
    }
};

export default categoriesReducer;
