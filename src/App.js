import logo from './logo.svg';
// import './App.css';
import SignInAndSignUpPage from './pages/Sign-in-sign-up';
import { auth } from './firebase/Firebase.utils';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    // to update us on when authentication state changes
    this.state = {
      currentUser: null
    }
}

unsubscribeFromAuth = null

componentDidMount() {
  // subscriber to listen to auth state change -- allots for OAuth sign in while component is mounted
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });
    console.log(user);
  })
}
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div className="App">
        <SignInAndSignUpPage />
      </div>
    );
  }
}

export default App;
