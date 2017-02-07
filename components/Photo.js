import React from 'react';
import { Link } from 'react-router'

class Photo extends React.Component {
  render() {
    const { photo, index } = this.props;
    const showFullPath = `${photo.url}`
    const className = `photo photo-${index}`
    return (
        <div className={className}>
          <h5>{photo.user.fullname}</h5>
          <br/>
          <h5>{photo.name}</h5>
          <Link to={showFullPath}>
            <img src={photo.image_url}/>
          </Link>
        </div>  
    )
  }
}

export default Photo;