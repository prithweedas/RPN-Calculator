import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import Main from "./Main"
import reducer from "./reducer"

const store = createStore(reducer)

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
)
