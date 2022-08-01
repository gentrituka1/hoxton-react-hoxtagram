export function AddPictures ({createArticle}) {
    return (
    <section className="form-container">
      <form className="comment-form new-post-form image-card" onSubmit={(event) => {
        event.preventDefault();
        createArticle(event.target.title.value, event.target.image.value);
      }}>
        <h2 className="title">New Post</h2>
        <input className="comment-input" type="text" name="title" id="title" placeholder="Add a title..."/>
        <input className="comment-input" type="url" name="image" id="image" placeholder="Add an image url..." />
        <button className="comment-button" type="submit">Post</button>
      </form>
    </section>
    )
}