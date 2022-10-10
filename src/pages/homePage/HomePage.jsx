import React from 'react'
// import Home from '../../components/home/Home';
import './homePage.styles.scss'
import Directory from '../../components/directory/Directory';


// export default function HomePage() {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }

 const HomePage = () => (
  <div className='homepage'>
   <Directory />
  </div>
)

export default HomePage;
