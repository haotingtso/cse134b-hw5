let posts = [];

export const addPost = ({ title, date, summary }) => {
  posts.push({
    title,
    date,
    summary,
  });
};

export const editPost = (index, new_post) => {
  posts[index] = new_post;
};

export const deletePost = index => {
  posts.splice(index, 1);
};

export default posts;
