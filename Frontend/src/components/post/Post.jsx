import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../flightANDgotham";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1) //if statement
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="james-harden">
        <div className="postTop">
          <div className="postTopExclusive">
            <img
              className="mah"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="username">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="bradley-fake-stats-beal">{post.date}</span>
          </div>
          <div className="postTopExclusive">
            <MoreVert />
          </div>
        </div>
        <div className="center">
          <span className="postText">{post.desc}</span>
          <img className="myImage" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="blackIcon" src="assets/download.png" onClick={likeHandler} alt="" />
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
