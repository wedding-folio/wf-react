import { useState } from 'react'
import "./styles.css"
import { useUpdateThemeContext, useThemeListContext } from "@context/FilterContext/FilterContext"

function Toolbar() {
  const [showFilterMenu, setShowFiltermenu] = useState(false);

  function toggleFilterMenu() {
    setShowFiltermenu(!showFilterMenu)
  }

  return (
    <section className={"toolbar"}>
      <div className={"toolbarContainer"}>
        <h2 className={"toolbarTitle"}>Gallery</h2>

        <div className={"filterWrapper"}>
          <div className={"filterContainer"}>
            <p
              className={"filterButton"}
              onClick={toggleFilterMenu}
            >Filter By</p>
            {showFilterMenu && <FilterMenu />}
          </div>

        </div>
      </div>
    </section>
  )
}

function FilterMenu() {

  const themeList = useThemeListContext();
  const { updateTheme } = useUpdateThemeContext();

  function handleFormChange(e) {
    updateTheme(e.target.value)
  }

  return (
    <div className={"filterMenu"}>
      <p className={"filterMenuTitle"}>Theme</p>
      <form className={"filterForm"}>
        {themeList.map((theme, i) => {
          return (
            <fieldset className={"formFieldSet"} key={i}>
              <input
                type="radio"
                className={"filterOption"}
                name="theme"
                id={theme}
                onChange={handleFormChange}
                value={theme}
              />
              <label className={"filterLabel"} htmlFor={theme}>
                {theme}
              </label>
            </fieldset>
          )
        })}

      </form>
    </div>
  )
}

export default Toolbar;