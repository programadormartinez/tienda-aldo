import React, { createContext, useState } from 'react'

export const CategoryContext = createContext();
const CategoryContextProvider = ({children}) => {

    const [categoryId, setCategoryId] = useState('');
    const setCategory = (id) => {
        setCategoryId(id);
    }
    return <CategoryContext.Provider value={{ setCategory, categoryId }}>{children}</CategoryContext.Provider>;
}

export default CategoryContextProvider