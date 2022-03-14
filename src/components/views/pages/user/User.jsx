import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
        <button className="userAddButton">Create</button>
        </Link>
        
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
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowIfoTitle">rickysensei</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowIfoTitle">12.07.2002</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowIfoTitle">+254712 345 678</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowIfoTitle">rickysensei@gmail.com</span>
            </div>
            <span className="userShowTitle">Address Details</span>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowIfoTitle">Nakuru City | Kenya</span>
            </div>
          </div>
        </div>
        {/* edit user */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input type="text" className="userUpdateInput" placeholder="username" required/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="userUpdateInput" placeholder="full name" required/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="email">Email</label>
                <input type="email" className="userUpdateInput" placeholder="email@gmail.com" required/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="userUpdateInput" placeholder="+254700 000 000" required/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="address">Address</label>
                <input type="text" className="userUpdateInput" placeholder="City,Country" required/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="/sensei.png" alt="user img upload" className="userUpdateImg" />
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" name="" id="file" style={{display:"none"}} required/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
