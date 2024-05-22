import React from 'react';
import './HomeScreen.css'
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';


function HomeScreen() {

    return ( 
        <div>
                <Nav />
                <Banner />
                <Row Title=" Originals" fetchUrl={requests.originals} isLargerow/>
                <Row Title=" Trendings" fetchUrl={requests.trending}/>
                <Row Title=" Romance Movies" fetchUrl={requests.RomanceMovies}/>
                <Row Title=" Action Movies" fetchUrl={requests.ActionMovies}/>
                <Row Title=" Documentaries" fetchUrl={requests.Documentaries}/>
                <Row Title=" Horror Movies" fetchUrl={requests.HorrorMovies}/>
                <Row Title=" Comedy Movies" fetchUrl={requests.ComedyMovies}/>
              
                
        </div>
   
 );
}

export default HomeScreen;