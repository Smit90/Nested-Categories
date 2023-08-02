import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './redux/actions';

const CategoryForm = ({ categories, addCategory }) => {
    const [categoryName, setCategoryName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const renderCategoriesTree = (category, level = 0) => {
        const indent = '-'.repeat(level);
        return (
            <React.Fragment key={category.id}>
                <option value={category.id}>{indent + category.name}</option>
                {category.children.map(child => renderCategoriesTree(child, level + 1))}
            </React.Fragment>
        );
    };

    const handleSubmit = () => {
        if (categoryName) {
            addCategory(categoryName, selectedCategory);
            setCategoryName('');
            setSelectedCategory('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Select a parent category</option>
                {categories.map(category => renderCategoriesTree(category))}
            </select>
            <button onClick={handleSubmit}>Add Category</button>
            <div>
                <h2>Categories Tree</h2>
                <ul>
                    {categories.map(category => renderCategoriesTree(category))}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    categories: state,
});

const mapDispatchToProps = {
    addCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
