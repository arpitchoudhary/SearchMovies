import React, { Component } from 'react';
import { connect } from 'react-redux';
import Error from '../layout/Error'
import MovieCard from './MovieCard';

export class MovieContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    let errorContent = '';

    errorContent =
      movies.Response === 'False' ? <Error></Error> : null;

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
        : null;

    return <div className="row">{content}{errorContent}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MovieContainer);