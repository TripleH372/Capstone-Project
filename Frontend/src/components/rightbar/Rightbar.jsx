import "./rightbar.css";
import { Users } from "../../flightANDgotham";
import Online from "../online/Online";

export default function Rightbar({ profile }) {


  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="title">User information</h4>
        <div className="info">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Great Falls</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarZ">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
