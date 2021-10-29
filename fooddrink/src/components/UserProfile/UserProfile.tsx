
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlertSuccess from "../share/AlertSuccess";
import "./UserProfile.scss"
const UserProfile: React.FC = () => {
  const [user, setUser] = useState({
    id: 1,
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const [errors, setErrors] = useState([] as any[]);
  const [errorsUserProfile, setErrorsUserProfile] = useState([] as any[]);

  const [userProfile, setUserProfile] = useState({
    id: 1,
    name: "",
    address: "",
    date_of_birth: "",
    phone: "",
    user_id: 1
  })

  const { id } = useParams<ParamTypes>();
  const requestUrl = "http://localhost:3001/api/v1/users/" + id;
  const qs = require("qs");

  interface ParamTypes {
    id: string
  }

  function getParamsUser() {
    let username = document.getElementById("username") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    let password_confirmation = document.getElementById("password_confirmation") as HTMLInputElement;
    setUser({
      ...user,
      username: username.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value
    })
  }

  function getParamsUserProfile() {
    let name = document.getElementById("name") as HTMLInputElement;
    let address = document.getElementById("username") as HTMLTextAreaElement;
    let date_of_birth = document.getElementById("username") as HTMLInputElement;
    let phone = document.getElementById("username") as HTMLInputElement;
    setUserProfile({
      ...userProfile,
      name: name.value,
      address: address.value,
      date_of_birth: date_of_birth.value,
      phone: phone.value
    })
  }

  async function handleAccountSubmit(e: React.FormEvent) {
    e.preventDefault();
    getParamsUser();
    console.log(user);
    // await axios.patch(requestUrl, qs.stringify({
    //   user: {
    //     username: user.username,
    //     email: user.email,
    //     password: user.password,
    //     password_confirmation: user.password_confirmation
    //   }
    // }))
    //   .then(res => {
    //     const resJSON = JSON.parse(JSON.stringify(res.data));
    //     if (resJSON.success)
    //       window.location.href = "/admin";
    //     else {
    //       let errors: any[] = resJSON.errors;
    //       let list: any[] = [];
    //       Object.entries(errors).forEach(
    //         ([key, value]) => {
    //           list.push(key + " " + value);
    //         }
    //       );
    //       setErrors(list);
    //     }
    //   })
  }

  async function handleUserProfileSubmit(e: React.FormEvent) {
    e.preventDefault();
    getParamsUserProfile();
    const url = "http://localhost:3001/api/v1/user_profiles/" + userProfile.id
    await axios.patch(url, qs.stringify({
      user_profile: {
        id: userProfile.id,
        name: userProfile.name,
        address: userProfile.address,
        date_of_birth: userProfile.date_of_birth,
        phone: userProfile.phone,
        user_id: user.id
      }
    }))
      .then(res => {
        const resJSON = JSON.parse(JSON.stringify(res.data));
        if (resJSON.success)
          window.location.href = "/admin";
        else {
          let errors: any[] = resJSON.errors;
          let list: any[] = [];
          Object.entries(errors).forEach(
            ([key, value]) => {
              list.push(key + " " + value);
            }
          );
          setErrorsUserProfile(list);
        }
      })
  }


  useEffect(() => {
    async function fetchUser() {
      await axios.get(requestUrl)
        .then(res => {
          const resJSON = JSON.parse(JSON.stringify(res.data));
          setUser(resJSON.user);
          setUserProfile(resJSON.user_profile);
        })
        .catch(error => console.log(error))
    }
    fetchUser();
  }, [])
  return (
    <div style={{ display: "flex" }}>
      <div className="col-md-6">
        <div className="myaccount-content">
          <h3>Account Details</h3>
          <div className="account-details-form">
            <form action="#" onSubmit={handleAccountSubmit}>
              <div className="row">
                <AlertSuccess errors={errors} />
              </div>
              <div className="row">
                <div className="col-lg-12 col-12 mb-30">
                  <label>Username: </label>
                  <input id="username" placeholder="Username" defaultValue={user.username} type="text" />
                </div>
                <div className="col-12 mb-30">
                  <label>Email: </label>
                  <input id="email" placeholder="Email Address" defaultValue={user.email} type="email" />
                </div>
                <div className="col-12 mb-30">
                  <h4>Password change</h4>
                </div>

                <div className="col-lg-6 col-12 mb-30">
                  <label>New Password: </label>
                  <input id="password" placeholder="New Password" type="password" />
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <label>Confirm Password: </label>
                  <input id="password_confirmation" placeholder="Confirm Password" type="password" />
                </div>
                <div className="col-12">
                  <button className="save-change-btn">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="myaccount-content">
          <h3>User Profile Details</h3>
          <div className="account-details-form">
            <form action="#" onSubmit={handleUserProfileSubmit}>
              <div className="row">
                <AlertSuccess errors={errorsUserProfile} />
              </div>
              <div className="row">
                <div className="col-lg-12 col-12 mb-30">
                  <label>Full Name: </label>
                  <input defaultValue={userProfile.name} id="name" placeholder="Full Name" type="text" />
                </div>

                <div className="col-12 mb-30">
                  <label>Date of birth: </label>
                  <input defaultValue={userProfile.date_of_birth} id="date_of_birth" placeholder="Date of birth" type="date" />
                </div>
                <div className="col-12 mb-30">
                  <label>Address: </label>
                  <textarea id="address" defaultValue={userProfile.address} name="address" placeholder="Address" />
                </div>
                <div className="col-12 mb-30">
                  <label>Phone: </label>
                  <input id="phone" defaultValue={userProfile.phone} name="phone" placeholder="Phone" type="text" />
                </div>
                <div className="col-12">
                  <button className="save-change-btn">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;