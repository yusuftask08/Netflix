import axios from 'axios';
import { createStore } from 'vuex'
export default createStore({
  state: {
    movies : [],
    baseURL : "http://www.omdbapi.com",
    apiKey : "38657152"
  },
  mutations: {
    setMovies (state, pMovies) {
      state.movies = pMovies ;
    },
  },
  getters : {
    movieItemList : state => state.movies,
  },
  actions: {
    searchMovie({commit, state }, searchKey){
      axios
      .get(`${state.baseURL}/?apiKey=${state.apiKey}&s=${searchKey}`
      )
      .then((movie_list_response) => {
        console.log("movie", movie_list_response);
        commit("setMovies", movie_list_response.data.Search || [] )
      });
    }
  },
  modules: {
  }
})
