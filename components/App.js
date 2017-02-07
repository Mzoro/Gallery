import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import * as actionCreators from '../actions/actionCreators'

class App extends React.Component{
  clickHandler() {
    this.props.fetchPhotos(this.props.page)
  }
  componentDidMount() {
    this.props.fetchPhotos(this.props.page)
  }
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, {...this.props})}
        {this.props.params.photoId
          ? <Link to="/">Back to Gallery</Link>
          : <button onClick={this.clickHandler.bind(this)}>load more...</button>}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)