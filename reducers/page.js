export default function page(state=1, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return action.number
    default:
      return state;
  }

}