import { useLocation } from "react-router-dom"
import Details from "@components/Details"
import OtherWork from "@components/OtherWork"

function PostDetails() {

  const location = useLocation();
  console.log(location)
  return (
    <div>
      <Details />
      <OtherWork />
    </div>
  )
}

export default PostDetails;