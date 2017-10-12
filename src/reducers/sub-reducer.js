const product = (state ={}, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return {
        id: action.id,
      }
      break
    default:
      return state
  }
}

export default product
