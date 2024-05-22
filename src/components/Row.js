import React,{useEffect, useState} from 'react';
import'./Row.css'
import axios from './axios';

function Row({Title,fetchUrl,isLargerow}) {
    const [movies,setMovies]=useState()
    const baseUrl="https://image.tmdb.org/t/p/original/"
    useEffect(()=>
        {async function fetchData(){
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request

        }
        fetchData()
    },[fetchUrl])

    return (
        <div className='Row'>
            
           <h2>{Title}</h2>
           <div className="row_posteres">
           {(movies || []).map((movie)=>
            (<img   key={movie.id} 
                className={`row_poster ${isLargerow && "row_posterLarge"}`}
             src={`${baseUrl}${isLargerow? movie.poster_path :movie.backdrop_path}`} alt=''/>)
           )}
           </div>
          
        </div>
      );
}

export default Row;