import Card from "@components/Card"
import "./styles.css"

const postData = [
  {
    weddingTheme: "Rustic",
    imageURL: "https://source.unsplash.com/random/?wedding",
    postTitle: "Post Title",
    location: "New York City, NY",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  },
  {
    weddingTheme: "Rustic",
    imageURL: "https://source.unsplash.com/random/?wedding",
    postTitle: "Post Title",
    location: "New York City, NY",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  }
]

function OtherWork() {
  return (
    <div className="otherwork-container">
      <h2 className="otherwork-header">Other Work</h2>
      <hr className="header-underline" />

      <div className="cards-container">
        {postData.map(cardObj => <Card postData={cardObj} />)}
      </div>
    </div>
  )
}

export default OtherWork;