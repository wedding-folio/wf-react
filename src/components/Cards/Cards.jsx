import React, { useEffect, useState } from "react"
import { useFilterContext, useUpdateThemeContext } from "@context/FilterContext/FilterContext"
import { useQuery } from "react-query"
// import axiosClient from "@utils/axiosClient"
import Card from "@components/Card"
import "./styles.css"
// import weddingPhoto from "/public/images/wedding-photo.jpg" // image for testing

const dummyPosts = [
  {
    weddingTheme: "Modern",
    imageURL: "https://source.unsplash.com/random",
    postTitle: "Post Title",
    location: "Austin, TX",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  },
  {
    weddingTheme: "Rustic",
    imageURL: "https://source.unsplash.com/random",
    postTitle: "Post Title",
    location: "New York City, NY",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  },
  {
    weddingTheme: "Luau",
    imageURL: "https://source.unsplash.com/random",
    postTitle: "Post Title",
    location: "Austin, TX",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  },
  {
    weddingTheme: "Rustic",
    imageURL: "https://source.unsplash.com/random",
    postTitle: "Post Title",
    location: "New York City, NY",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  },
  {
    weddingTheme: "Modern",
    imageURL: "https://source.unsplash.com/random",
    postTitle: "Post Title",
    location: "Austin, TX",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  },
  {
    weddingTheme: "Rustic",
    imageURL: "https://source.unsplash.com/random",
    postTitle: "Post Title",
    location: "New York City, NY",
    postDesc: "Bacon ipsum dolor amet tri-tip rump brisket, pig shoulder salami jerky. Burgdoggen ribeye jowl, spare ribs ball tip rump sausage pork bacon flank t-bone pork loin tail ham hock brisket. Bresaola meatball chislic, bacon tri-tip jowl buffalo filet mignon short ribs spare ribs corned beef shankle pork chop. Pork chop bacon shank andouille salami."
  }
]

function Cards() {
  // State hooks
  const [posts, setPosts] = useState([]);

  // Context hooks
  const filter = useFilterContext();
  const { updateThemeList } = useUpdateThemeContext();

  // // React Query (data fetch)
  // // const { data, status } = useQuery('posts', fetchUserPosts)

  // set posts on initial render
  useEffect(() => {
    setPosts(dummyPosts)
  }, [])

  // set a list to filter on, populates the filter menu.
  // only run on initial load
  useEffect(() => {
    const themes = []
    dummyPosts.forEach(({ weddingTheme }) => {
      if (!themes.includes(weddingTheme)) themes.push(weddingTheme)
    })

    updateThemeList(themes)
  }, [])

  // watch for changes in our filter, and then filter our array of posts
  useEffect(() => {

    if (filter.length > 0) {
      console.log("THE VALUE IN FILTER CONTEXT IS: ", filter)
      const filteredPosts = dummyPosts.filter(({ weddingTheme }) => weddingTheme === filter)
      setPosts([...filteredPosts])
    }

  }, [filter])

  return (
    <div className={"cardContainer"}>
      {
        posts.map((postObj, i) => <Card key={i} cardImage={postObj.imageURL} cardTheme={postObj.weddingTheme} cardTitle={postObj.postTitle} cardLocation={postObj.location} cardDesc={postObj.postDesc} />)
      }
    </div>
  )
}

export default Cards;