import {LikesSection} from './likesSection'
import {CommentsList} from './commentsList'

export function ImageCard () {
    return (
        <>
        <article>
        <h2 className="title">Title of image goes here</h2>
              <img src="../assets/image-placeholder.jpg" className="image" />
              
              <LikesSection />

              <CommentsList />
        </article>
        </>
    )
}