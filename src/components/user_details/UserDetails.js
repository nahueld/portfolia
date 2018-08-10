import React from "react";

const UserDetails = props => (
  <div>
    <div className="row mb-5">
      <div className="col-md-12 text-center">
        <img
          src="https://images.unsplash.com/profile-1533265016645-60d57433730c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=99115f8050c90d6d3b4938475b423159"
          alt="Profile picture"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Some Name</h1>
        <p>creativity that brews community | instagram@chrstiekim</p>
      </div>
    </div>
  </div>
);

export default UserDetails;
