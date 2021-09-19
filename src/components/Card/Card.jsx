import { useHistory } from "react-router-dom"
import "./styles.css"

function Card({ postData }) {

  const { imageURL, weddingTheme, postTitle, location, postDesc } = postData;
  const history = useHistory();

  function handleButtonClick() {
    history.push({ pathname: "/post/jane/2", state: postData })
  }

  return (
    <div className={"card"}>
      <div className={"cardImageContainer"}>
        <div className={"cardThemePill"}>
          <p>{weddingTheme}</p>
        </div>
        <img src={imageURL} />
      </div>

      <div className={"cardContent"}>
        <h3>{postTitle}</h3>
        <p className={"cardLocationPill"}>{location}</p>

        <p>
          {postDesc}
        </p>
        {/* <Link to="/post/jane/2"> */}
        <span className={"cardButton"} onClick={handleButtonClick}>Learn More</span>
        {/* </Link> */}
      </div>

    </div >
  )
}

export default Card;