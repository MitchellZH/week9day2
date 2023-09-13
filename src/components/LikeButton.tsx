import { useState } from "react";
import {AiOutlineLike} from "react-icons/ai"
import { AiFillLike } from "react-icons/ai"

const LikeButton = () => {
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    if(liked === true){
      setLiked(false)
    } else {
      setLiked(true)
    }
  }
  if(liked === false){
    return (
      <>
        <button onClick={handleClick}>
          <AiOutlineLike />
        </button>
      </>
    );
  }
  return (
    <>
      <button onClick={handleClick}>
        <AiFillLike />
      </button>
    </>
  );
  
};
export default LikeButton;
