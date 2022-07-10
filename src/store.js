import { createStore } from 'redux'

const initialState = {
  JWT: localStorage.getItem("JWT") || "",
  user: JSON.parse(localStorage.getItem("user")) || {}
}

const changeState = (state = initialState, { type, JWT, user }) => {
  switch (type) {
    case 'setJWT':
      localStorage.setItem("JWT", JWT)
      return { ...state, JWT }
    case 'setUser':
      localStorage.setItem("user", JSON.stringify(user))
      return { ...state, user }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
