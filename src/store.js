import { createStore } from 'redux'

const initialState = {
  JWT: localStorage.getItem("JWT") || "",
}

const changeState = (state = initialState, { type, JWT }) => {
  switch (type) {
    case 'setJWT':
      localStorage.setItem("JWT", JWT)
      return { ...state, JWT }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
