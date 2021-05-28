import React from 'react';
// import CatIndex from './CatIndex'
import { Container } from 'reactstrap';
import CatList from './CatList'
 
const Cats = () => {
   return (
     <Container className="App">

       <CatList />
     </Container>
   );

}
 
export default Cats;

// <br/>
// <h1 className="App-intro">
//   To complete this challenge, complete and fix the existing code to have it do the following:
// </h1>

// <hr />
  
//  <ul></ul>
//   <li>Render the list of cat breeds to the screen</li>
//   <li>Use props correctly</li>
//   <li>Use .map() correctly</li>
//   <li>Ensure there are no errors</li>
//  </ul>
//  <hr />