
import "./styles.css"
function Details() {
  return (
    <>
      <section className="details-container">
        <div className="details-wrapper">
          <div className="detailsimg-container">
            <img src="https://source.unsplash.com/featured/1000x600?wedding" alt="A picture from a wedding" />
            <span className="detailsThemePill">Rustic</span>
          </div>
        </div>
        <div className="details-wrapper">
          <div className="post-content">
            <h2>Post Name</h2>
            <span className="locationPill">City, State</span>
            <p className="details-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolore iure molestiae rerum vero. Accusantium facilis culpa sequi ea enim suscipit nostrum dolores perspiciatis, labore est ab consequuntur minus quis.
            </p>
            <div className="vendor-info">
              <p>Vendor Info</p>
              <p>Music: Professional Disk Jockies</p>
              <p>Furniture: Mike's Round Table</p>
              <p>Bar: Jerry's Lagoon</p>
              <p>Catering: Sweet Home Cooking</p>
            </div>
            <span className="detials-button">Contact Planner</span>
          </div>
        </div>
      </section>
      <span className="detailsThemePillAlt">Rustic</span>
    </>
  )
}

export default Details;