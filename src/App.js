import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/esm/Nav';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/Firebase.utils';

import './App.scss';
import SignInAndSignUpPage from './pages/Sign-in-sign-up';
import {Header} from '../src/components/common/Header';
// import HomePage from './pages/home/HomePage';

class App extends React.Component {
  constructor() {
    super();
    // to update us on when authentication state changes
    this.state = {
      currentUser: null,
    }
}

unsubscribeFromAuth = null

componentDidMount() {
  console.log("componentDidMount Hit")
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
      // <Router>
      //   <Navbar className='border-bottom' bg="transparent" expand="lg">
      //     <Nav className='ml-auto'>
      //     <Link className="nav-link" to="/">Home</Link>
      //     <Link className="nav-link" to="/signin">Sign In</Link>
      //     </Nav>
      //   </Navbar>
      //   <Routes>
      //     <Route path='/signin' exact element={[<Header currentUser={this.state.currentUser}/>, <SignInAndSignUpPage />]}></Route>
      //     <Route path="/" exact element={<HomePage title={this.state.home.title}></HomePage>}></Route>
        
      //   </Routes>
      // </Router>


      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        {/* <SignInAndSignUpPage /> */}
      </div>
    )
  }
}

export default App;
