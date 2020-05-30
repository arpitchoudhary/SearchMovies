import React, { Component } from 'react'
import SearchForm from './SearchForm'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import MovieContainer from '../home/MovieContainer'

class Landing extends Component {
    render() {
        const { loading } = this.props.loading
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner/> : <MovieContainer/>}
            </div>
        )
    }
}

const mapStateToProp = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProp)(Landing)
