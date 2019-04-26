import React, { Component } from 'react';
import './App.css';
import Menu from './navbar';
import Gallery from "react-photo-gallery";
import images from './images'
import Footer from './Footer';
import Header from './Header';
import Products from './products';
import Contact from './contact';
import About from './about';
import Recipes from './Recipes';
import { Card, CardImgOverlay, CardImg } from 'reactstrap';
import Form from './Form'
import './Form'
import Decofruits from './Decofruits';
import DecoFruits1 from './Decofruits1'



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

<Menu/>
<Header/>

<Decofruits/>

<div className APP_ID>
  <h1 style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}> <a href="https://xenodochial-torvalds-77990e.netlify.com/">Vos recettes</a></h1>
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

