import { useEffect } from 'react'
import {useCounterStore} from './store/counterStore'
import shallow from 'zustand/shallow'

function App() {

  const {title, count, posts} = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
    posts: state.posts
  }), shallow)

  const {increment, getPosts, clearStore, multiply} = useCounterStore()

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>

      <button onClick={()=>{
        increment(10)
      }}> Increment by 10</button>

      <button onClick={()=>{
        clearStore()
      }}> Clear Store</button>

      <button onClick={()=>{
        multiply(2)
      }}> Multiply by 2</button>

      <hr />

      {/* {JSON.stringify(posts
      )} */}

{posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
    
  )
}

export default App