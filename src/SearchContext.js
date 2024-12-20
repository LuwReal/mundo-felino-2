import React, { createContext, useState, useContext } from 'react';
const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext);
export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState(''); 
    
    let teste = 'Blogs/5-gatos-mais-famosos-do-japao'
    const routes = [teste, 'about', 'contact', 'blogs'];
  const filteredRoutes = routes.filter(route =>
    route.toLowerCase().includes(searchQuery.toLowerCase()) 
  );
  return (

    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredRoutes }}>
        {children}
    </SearchContext.Provider>
  );
};
