import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_DETAIL } from '../actions/types';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }

        case FETCH_MOVIE:
            return {
                ...state,
                movies: action.payload
            }

        case FETCH_MOVIE_DETAIL:
            return {
                ...state,
                movie: action.payload
            }

        default:
            return state
    }
}