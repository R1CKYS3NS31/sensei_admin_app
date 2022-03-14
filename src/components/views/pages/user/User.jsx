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
          <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
