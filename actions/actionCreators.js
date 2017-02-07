export const setPage = (number) => {
  return {
    type: 'SET_PAGE',
    number
  }
}
export const fetchPhotosSuccess = (photos) => {
  return {
    type: 'LOAD_PHOTOS',
    photos
  }
}
export const fetchPhotos = (page) => {
  let path = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF'
  return (dispatch) => {
    if (page != 1) {
      path += `&page=${page}`
    }
    return fetch(path).then((response) => {
      return response.json()
    }).then((json) => {
      dispatch(setPage(page+1))
      dispatch(fetchPhotosSuccess(json.photos))
    })
  }
}
