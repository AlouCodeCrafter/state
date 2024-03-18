
import React from 'react';
import './App.css';
import State from './State';

class personalité extends React.Component{

  constructor(personne){
    super(personne)
    this.state = { fullName : "Paul Labil Pogba" , 
      bio : "Paul Pogba est un célèbre footballeur français, milieu de terrain de Manchester United et membre de l'équipe nationale française ayant remporté la Coupe du monde FIFA en 2018" , 
      imgSrc : "/images/pogba.jpg", 
      profession : " Footballeur Professionel",
      vraifaux : " show "
    }
  }
  render(){
    return(
      <>
        <img src={this.state.imgSrc} alt="" width={"200px"} />
        <h2>{this.state.fullName}</h2>
        <p> <b>Biographie :</b>{this.state.bio}</p>
        <p> <b>Profession : </b>{this.state.profession}</p>
        <button>{this.state.vraifaux}</button>

      </>
    )
  }
}

export default personalité;
