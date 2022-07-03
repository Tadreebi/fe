import { createStore } from 'redux'

const initialState = {
  JWT: false,
}

const changeState = (state = initialState, { type, JWT }) => {
  switch (type) {
    case 'setJWT':
      return { ...state, JWT }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
