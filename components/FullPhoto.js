import React from 'react';

export default class FullPhoto extends React.Component {
  render(){
    const id = this.props.params.photoId
    const photo = this.props.photos.filter( (el) => { return el.id == id})[0]
    return (
      <div>
        <h5>{photo.user.fullname}</h5>
        <br/>
        <h5>{photo.name}</h5>
        <img src={photo.image_url}/>
      </div>
    )
  }
}

