import React from 'react'


const Profile = () => {
return (
    <div className='pt-20'>
    <div className="profile-container">
      <div className="profile-title-div">
        <p className="profile-title">Account Info</p>
        <hr className="post-hr" />
      </div>
      <div className="profile-info">
        <div className="profile-info-div">
          <p className="profile-info-p">First Name:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).first_name}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Last Name:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).last_name}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Username:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).username}
          </p>
        </div>
        <div className="profile-info-div">
          <p className="profile-info-p">Email:</p>
          <p className="user-info-p">
            {JSON.parse(localStorage.getItem("currentUser")).email}
          </p>
        </div>
      </div>
      <div className="home-container">
        <div className="home-post-container">
          <div
            onClick={() => (window.location.pathname = "/edit")}
            className="fake-input"
          >
            Create Post
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile