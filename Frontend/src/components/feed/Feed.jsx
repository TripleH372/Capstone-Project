import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../flightANDgotham";
import { Users } from "../../flightANDgotham";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Coasts.map((p) => ( //Using HashMap like sequence here
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
