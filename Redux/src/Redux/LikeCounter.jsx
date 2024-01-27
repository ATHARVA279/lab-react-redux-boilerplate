import React, { useState } from 'react'
import {incrementLike, decrementLike} from './Actions.jsx'
import {createStore} from'redux'
import Reducer from './Reducer'
const store = createStore(Reducer)

function LikeCounter() {

    const [like,setlike] = React.useState(store.getState().likes)

    function handleLike() {
        store.dispatch(incrementLike())
    }
    function handleUnlike() {
        store.dispatch(decrementLike())
    }

    React.useEffect(() => {
        const subscribe = store.subscribe(() => {
            setlike(store.getState().likes)
        })
        return subscribe
    },[])
  return (
    <div>
      <h1>
        Number of Likes: {store.getState().likes}
      </h1>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnlike}>Unlike</button>
    </div>
  )
}

export default LikeCounter
