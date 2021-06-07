import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    //Build google's api library, initial it with Oauth client's id
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "600933153767-7fl8tgt2qc8tlq0esnul02vte86d5rrm.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed in</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
export default GoogleAuth;
