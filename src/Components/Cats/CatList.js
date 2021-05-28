import React, { Component } from 'react';
import CatIndex from './CatIndex';
 
const CatList = (props) => {
  
  return (
    <>
    <div>
      <ul>
        {props.cats.map((cat) => { 
      <li key={cat} value={cat}></li>
      </ul>
  </div>
     </>

        })}
  )
 
export default CatList;