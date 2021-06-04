import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    //Build google's api library, initial it with Oauth client's id
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "600933153767-7fl8tgt2qc8tlq0esnul02vte86d5rrm.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;
