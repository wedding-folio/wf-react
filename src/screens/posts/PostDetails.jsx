import { useLocation } from "react-router-dom"

function PostDetails() {

  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h2>Post Details</h2>
    </div>
  )
}

export default PostDetails;