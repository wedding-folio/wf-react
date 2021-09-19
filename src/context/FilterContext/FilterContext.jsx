// a user should be able to filter shown cards on the UI by
// selecting a theme from a filter dropdown.
//
// this context is used to manage updating the currently filtered theme
// and also for reading a theme value, if a filter is applied.
import { createContext, useContext, useState } from "react";

const FilterStateContext = createContext(); // for reading data
const FilterUpdateContext = createContext(); // for altering data
const ThemesListContext = createContext(); // for reading a list of themes

export function FilterContextWrapper({ children }) {

  const [themeFilter, setThemeFilter] = useState("");
  const [themeList, setThemeList] = useState([]);


  function updateTheme(themeName) {
    setThemeFilter(themeName);
  }

  function updateThemeList(themesArr) {
    setThemeList(themesArr)
  }

  const updateFns = {
    // functions to modify the theme we filter on
    updateTheme,
    updateThemeList
  }

  return (
    <FilterStateContext.Provider value={themeFilter}>
      <ThemesListContext.Provider value={themeList}>
        <FilterUpdateContext.Provider value={updateFns}>
          {children}
        </FilterUpdateContext.Provider>
      </ThemesListContext.Provider>
    </FilterStateContext.Provider>
  )

}

export function useFilterContext() {
  return useContext(FilterStateContext);
}

export function useThemeListContext() {
  return useContext(ThemesListContext);
}

export function useUpdateThemeContext() {
  return useContext(FilterUpdateContext);
}