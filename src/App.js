import React, { useState } from "react";
import Authentication from "./components/Authentication.jsx";
import HomePage from "./components/HomePage.jsx";

import "./styles.scss";

export default function App() {
  const [token, setToken] = useState(null);
  const [wsEndpoint] = useState("ws://192.168.2.109:3120");
  const [kseRESTApi] = useState("http://192.168.2.150:5002");
  const [authenticated, setAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  function authenticate(profile, token) {
    let settings = JSON.parse(profile.settings);
    profile.settings = settings;
    setUserProfile(profile);
    setToken(token);
    setAuthenticated(true);
  }

  function updateUserSettings(settings) {
    userProfile.settings = settings;
    setUserProfile(userProfile);
  }

  return authenticated === false ? (
    <div className="appdiv">
      <Authentication kseRESTApi={kseRESTApi} authenticate={authenticate} />
    </div>
  ) : (
    <div>
      <HomePage
        //VARS
        token={token}
        wsEndpoint={wsEndpoint}
        kseRESTApi={kseRESTApi}
        userProfile={userProfile}
        //FUNC
        setAuthenticated={setAuthenticated}
        setUserProfile={setUserProfile}
      />
    </div>
  );
}
