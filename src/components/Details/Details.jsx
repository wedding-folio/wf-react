
import "./styles.css"
function Details() {
  return (
    <section className="details-container">

      <div className="details-wrapper">
        <div className="detailsimg-container">
          <img src="https://source.unsplash.com/featured/1000x600?wedding" alt="A picture from a wedding" />
        </div>
        {/* <div className="bg-img"></div> */}
      </div>

      <div className="details-wrapper">
        <h2>Some Text</h2>
      </div>
    </section>
  )
}

export default Details;