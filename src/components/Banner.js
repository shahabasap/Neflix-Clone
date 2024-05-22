import React ,{useEffect, useState}from 'react';
import './Banner.css'
import axios  from './axios';
import requests from './Request';

function Banner() {
  const[movie,setMovie]=useState([])

  useEffect(()=>{
    async function fetchData() {
      const request=await axios.get(requests.trending)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
      return request
    }
    fetchData()

  },[])

  function Truncate(string,n) {
    return string?.length> n ?string.substr(0,n-1)+'...' :string;
  }
    return ( 
        <header className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie ? movie.backdrop_path:null}")`}}>
      <div className="banner-contents">
        <div className="banner-title"><h1>{ movie?.original_title || movie?.name || movie?.title}</h1></div>
        <div className="banner-button">
            <button>Play</button>
            <button>My List</button>
        </div>
        <div className="banner-description">
            {Truncate(movie ? movie.overview:null,150)}
            
        </div>
      </div>
      <div className="bannerfade-button" />
        </header>
     );
}

export default Banner;