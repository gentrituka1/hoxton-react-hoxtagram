import { useState } from "react";

export function CommentsList (){
    const [comments, setComments] = useState([]);

    function getComments() {
        return fetch("http://localhost:4000/comments")
            .then(response => response.json())
            .then(commentsFromServer => setComments(commentsFromServer));
    }
    
    return (
        <>
        <ul className="comments">
            {getComments().map(comment => 
                <li key={comment}>
                    {comment.text}
                </li>
            )}
        </ul>
        </>
    )
}