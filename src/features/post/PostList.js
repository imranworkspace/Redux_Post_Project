import { useSelector } from "react-redux";
import {saveAllPosts} from './postSlice'
import '../../mycss/index.css'


const PostList = () => {
    // fetch all post from state from posts
    const posts = useSelector(saveAllPosts)
    
    // console.warn('myposts ',posts)
    // fetch data & map with html tag inside variable
    const  renderedPost = posts.map(p=>(
        <article key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
        </article>
    ))


  return (
    <div>
        {/* show data inside browser */}
      <section className="myposts">
        <h2><marquee>My Posts</marquee></h2>
        {renderedPost}
      </section>
    </div>
  )
}

export default PostList
