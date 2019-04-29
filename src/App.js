import React, { Component } from 'react';
import './App.css';

import Gallery from "react-photo-gallery";
import images from './Component/images'
import Footer from './Component/Footer';
import Header from './Component/Header';
import Products from './Component/products';
import Contact from './Component/contact';
import Decofruits from './Component/Decofruits';
import DecoFruits1 from './Component/Decofruits1'


const APP_ID ="6b76f133";
const APP_KEY = "db2e0e8aa78da4aafe4cb67d410b6dd9";

class App extends Component {
  state = {
    hitsArray: []
  }

  getSearchName = async (e)=>{
    e.preventDefault();

    const valueSearch = e.target.elements.searchname.value;

    await fetch(`https://api.edamam.com/search?q=${valueSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`)
    .then(response =>  response.json())
    .then(resData => this.setState({hitsArray: resData.hits},
      console.log(resData.hits))
  );

  this.componentDidMount=()=>{
    const jsond = localStorage.getItem("hitsArray");
    const recipes = JSON.parse(jsond);
    this.setState({hitsArray:recipes});

  }

  this.componentDidUpdate=()=>{
    const recip = JSON.stringify(this.state.hitsArray);
    localStorage.setItem("hitsArray",recip);
  }
  }
  render() {
return (
<div>

<Header/>

<Decofruits/>

<div className APP_ID>
  <h1 style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}> <a href="https://xenodochial-torvalds-77990e.netlify.com/">Your Recipes</a></h1>
</div>

<DecoFruits1/>
<Products/>


<Gallery photos={images} />

<Contact/>
<Footer/> 
      </div>
    )
}}

export default App;

