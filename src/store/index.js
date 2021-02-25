import axios from 'axios';
import {
  createStore
} from 'vuex'
import users from "./modules/users"
export default createStore({
  state: {
    movies: [],
    baseURL: "https://api.themoviedb.org/3/search/movie",
    apiKey: "7b97ca5600ae944d697e04e778928d05",
    property: "language=en-US&query=",
    propert: "page=1",

  },
  mutations: {
    setMovies(state, pMovies) {
      state.movies = pMovies;
    },

  },
  getters: {
    movieItemList: state => state.movies,
  },
  actions: {
    searchMovie({
      commit,
      state
    }, searchKey) {
      axios
        .get(`${state.baseURL}?api_key=${state.apiKey}&${state.property}${searchKey}&${state.propert}&append_to_response=credits,detail
`)
        .then((movie_list_response) => {
          console.log("SearchList", movie_list_response);
          commit("setMovies", movie_list_response.data.results || [])



        });
    }
  },
  modules: {
    users,
  }
})