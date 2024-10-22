/* eslint-disable prettier/prettier */
import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
    sort: "default",
  });

  const filterProducts = (products) => {
    return products
      .filter((product) => product.price >= filters.minPrice)
      .filter(
        (product) =>
          filters.category === "all" || product.category === filters.category
      )
      .sort((a, b) => {
        if (filters.sort === "lowToHigh") {
          return a.price - b.price;
        }
        if (filters.sort === "highToLow") {
          return b.price - a.price;
        }
        return 0;
      });
  };

  const handleChangeMinPrice = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: value,
    }));
  };

  const handleChangeCategory = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleSortChange = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      sort: value,
    }));
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        filterProducts,
        handleChangeMinPrice,
        handleChangeCategory,
        handleSortChange,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
