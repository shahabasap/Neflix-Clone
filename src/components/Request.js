const API_KEY="7cb2a88d374682942dac486e0a95dc9e"

const requests={
trending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,

action :`/discover/movie?api_key=${API_KEY}&with_genres=28`,

originals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,

ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;