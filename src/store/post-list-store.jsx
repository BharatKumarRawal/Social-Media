import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPost, action) => {
  let newPostList = currPost;
  if (action.type === "DELETE") {
    newPostList = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD") {
    newPostList = [action.payload, ...currPost];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userIdVal, titleval, bodyval, reaction, tagsval) => {
    dispatchPostList({
      type: "ADD",
      payload: {
        id: Date.now(),
        title: titleval,
        body: bodyval,
        reactions: reaction,
        userId: userIdVal,
        tags: tagsval,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go To Hawai",
    body: "Hi Firends. I am going on a vaction to Hawai. Hoping to enjoy a lot.",
    reactions: 0,
    userId: "user-9",
    tags: ["vacation", "hawai", "enjoy"],
  },
  {
    id: "2",
    title: "Pass Hogaye Vai",
    body: "Hi Firends. I passed the examination. Hoping to enjoy a lot.",
    reactions: 15,
    userId: "user-12",
    tags: ["graduating", "Unbeliveable", "enjoy"],
  },
];
export default PostListProvider;
