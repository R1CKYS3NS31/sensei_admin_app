import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" />
        </div>
        <div className="newUserItem">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="full name" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Phone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="address" />
        </div>
        <div className="newUserItem">
          <label htmlFor="gender">Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value={"male"} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={"female"} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value={"other"} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
            <label htmlFor="active">Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
