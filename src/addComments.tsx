type Props = {
    createComment: (content: string, imageId: number) => void;
  };
  export function AddCommentForm({ createComment, } : Props) {
    return (
      <form
        className="comment-form"
        onSubmit={(event) => {
          event.preventDefault();
          createComment(event.target.text.value, event.target.imageId.value) ;
        }}
      >
        <input
          className="comment-input"
          type="text"
          name="comment"
          placeholder="Add a comment..."
        />
        <button className="comment-button" type="submit">
          Post
        </button>
      </form>
    );
  }