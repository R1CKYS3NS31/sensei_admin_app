import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="/sensei.png" alt="user img" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ricky Sensei</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <spna className="userShowTitle">Account Details</spna>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowIfoTitle">rickysensei</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowIfoTitle">12.07.2002</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowIfoTitle">+254712 345 678</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowIfoTitle">rickysensei@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowIfoTitle">Nakuru City | Kenya</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
