import './App.css';
import SignInAndSignUpPage from './pages/Sign-in-sign-up';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils';
import React from 'react';
import {Header} from './components/common/Header';
import HomePage from './pages/home/HomePage';

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
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({ 
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    } else {
      this.setState({currentUser: userAuth});
    }
    // createUserProfileDocument(userAuth);
    // this.setState({ currentUser: user });
    console.log("Welcome", userAuth.displayName);
  })
}
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <SignInAndSignUpPage />
        <HomePage />
      </div>
    );
  }
}

export default App;
