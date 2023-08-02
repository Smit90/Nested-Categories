import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import categoriesReducer from './redux/reducer';
import CategoryForm from './CategoryForm';
import CategoryForm2 from './categoryForm2';

const store = createStore(categoriesReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Nested Categories Example</h1>
        {/* <CategoryForm /> */}
        <CategoryForm2 />
      </div>
    </Provider>
  );
}

export default App;
