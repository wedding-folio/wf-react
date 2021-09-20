import { useState } from "react"

export default function useSelectedPost() {
  const [selectedPost, setSelectedPost] = useState()

  function updateSelectedPost(postObj) {
    setSelectedPost({ ...postObj })
  }

  return {
    selectedPost,
    updateSelectedPost
  }

}