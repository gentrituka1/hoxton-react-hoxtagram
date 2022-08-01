import { useEffect, useState } from "react";

export function CommentsList (){
    const [comments, setComments] = useState();


    useEffect(() => {
        fetch("http://localhost:4000/comments")
        .then(response => response.json())
        .then(data => setComments(data))
    }, []);
    
    return (
        <>
        <ul className="comments">
            {comments.map(comment => (
                <li key={comment.id}>
                    {comment.content}
                </li>
            ))}
        </ul>
        </>
    )
}