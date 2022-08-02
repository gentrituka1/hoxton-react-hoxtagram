import { useEffect, useState } from "react";
import { AddPictures } from "./addPictures";
import "./App.css";
import { DogName } from "./components/DogName";
export type ImageType = {
  id: number;
  title: string;
  image: string;
  likes: number;
  comments: Comment[];
};
export type CommentType = {
  id: number;
  content: string;
  imageId: number;
};

function App() {
  const [images, setImages] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/images")
      .then((resp) => resp.json())
      .then((imagesFromServer) => setImages(imagesFromServer));
    fetch("http://localhost:4000/comments")
      .then((resp) => resp.json())
      .then((commentsFromServer) => setComments(commentsFromServer));
  }, []);

  function deleteComment(id: number) {
    const commentsCopy = comments.filter((comment) => comment.id !== id);
    fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    });
    setComments(commentsCopy);
  }
  function deleteArticle(id: number) {
    const imagesCopy = images.filter((image) => image.id !== id);
    fetch(`http://localhost:4000/images${id}`, {
      method: "DELETE",
    });
    setImages(imagesCopy);
  }

  function createArticle(title: string, image: string) {
    let newImage = {
      title,
      likes: 0,
      image,
    };

    fetch("http://localhost:4000/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
    })
      .then((resp) => resp.json())
      .then((imagesFromServer) => {
        setImages([...images, imagesFromServer]);
      });
  }
  function createComment(content: string, imageId: number) {
    let newComment = {
      content,
      imageId,
   
    };

    fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => resp.json())
      .then((commentsFromServer) => {
        setComments([...comments, commentsFromServer]);
      });
  }
  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <AddPictures createArticle={createArticle} />

      <section className="image-container">
        {images.map((image) => (
          <DogName
            createComment={createComment}
            image={image}
            comments={comments}
            deleteComment={deleteComment}
            deleteArticle={deleteArticle}
          />
        ))}
      </section>
    </div>
  );
}

export default App;