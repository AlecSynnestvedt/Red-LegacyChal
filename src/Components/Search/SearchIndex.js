import React, { Component } from 'react';
import {Input} from 'reactstrap';
import Search from './Search';
  
const SearchIndex extends Component() {
  constructor(props);
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     input: '',
     result: [],
   }

   setInput() {
     this.setState(
       {input: e.target.value},
       () => this.search()
     )
   }

   search() {
     this.setState({
       result: this.state.things.filter( things => {
        return thing.includes(this.state.search);
       })
     })
   }

   return (
     <>
        <label htmlFor="searchBar">Find things</label>
        <input type="text" value={props.input} onChange={props.searchFilterChange}/>
     </>
   )
 }
 function searchFunction() {

 }

 render() {
   const filteredSearch = this.state.search.filter(input => )
     <div>
       <Input placeholder='Search Here' />
       <h3>Results:</h3>
     </div>
 }

 
export default SearchIndex;
