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
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="username">Username</label>
                <input type="text" className="userUpdateInput" placeholder="username"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Full Name</label>
                <input type="text" className="userUpdateInput" placeholder="full name"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Email</label>
                <input type="text" className="userUpdateInput" placeholder="email@gmail.com"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Phone</label>
                <input type="telephone" className="userUpdateInput" placeholder="+254700 000 000"/>
              </div>
              <div className="userUpdateItem">
                <label htmlFor="username">Address</label>
                <input type="text" className="userUpdateInput" placeholder="City,Country"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
