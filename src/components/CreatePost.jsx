import { useRef } from "react";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store.jsx";
let CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userId = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userIdVal = userId.current.value;
    const titleval = title.current.value;
    const bodyval = body.current.value;
    const reaction = reactions.current.value;
    const tagsval = tags.current.value.split(" ");
    addPost(userIdVal, titleval, bodyval, reaction, tagsval);
  };
  return (
    <div className="container">
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Username
          </label>
          <input
            ref={userId}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Bharat."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={title}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today ...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={body}
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell Us more"
            rows="4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Numbe of reactions
          </label>
          <input
            ref={reactions}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Number of people reacted ...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtag here
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="tags"
            placeholder="tags for post ...."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
