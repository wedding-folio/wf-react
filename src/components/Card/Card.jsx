import { Link } from "react-router-dom"
import styles from "./styles.css"

function Card({ cardImage, cardTheme, cardTitle, cardLocation, cardDesc }) {
  return (
    <div className={"card"}>
      <div className={"cardImageContainer"}>
        <div className={"cardThemePill"}>
          <p>{cardTheme}</p>
        </div>
        <img src={cardImage} />
      </div>

      <div className={"cardContent"}>
        <h3>{cardTitle}</h3>
        <p className={"cardLocationPill"}>{cardLocation}</p>

        <p>
          {cardDesc}
        </p>
        <Link to="/post/jane/2">
          <span className={"cardButton middleOut"}>Learn More</span>
        </Link>
      </div>

    </div >
  )
}

export default Card;