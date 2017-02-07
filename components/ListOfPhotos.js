import React from 'react';
import Photo from './Photo';

class ListOfPhotos extends React.Component {
  render() {
    const photos = this.props.photos
    return (
      <div className='container'>
        {photos.map((photo,i) => <Photo key={i} index={i} photo={photo} />)}
      </div>
    )
  }
}

export default ListOfPhotos;

