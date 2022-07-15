import React from 'react'
import code from '../assets/code.svg';
import website from '../assets/site.svg';

export const Card = ({ nomeProgetto, categoria, urlImmagine, urlCodice, urlSito }) => {
    console.log(nomeProgetto, categoria, urlImmagine);
    return (
    <div className="card-progetto">
        <div className="left-side-card">
            <img src={urlImmagine} className="img-card-project"/>
        </div>
        <div className="right-side-card">
            <div className="titolo-progetto">
                <h3>{nomeProgetto}</h3>
                <h6>{categoria}</h6>
            </div>
            <p className="descrizione">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam euismod condimentum purus integer et.</p>
            <div className="icone">
                <a href={urlCodice} target="_blank" className="github-code"><img src={code}></img></a>
                <a href={urlSito} target="_blank" className="live-website"><img src={website}></img></a>
            </div>
        </div>
    </div>
  )
}

export default Card