import Post from "./Post";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";

// const posts = [
//   {
//     id: "123",
//     username: "dummyDataGuy",
//     userImg:
//       "https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg",
//     img: "https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg",
//     caption: "this works good",
//   },
//   {
//     id: "123",
//     username: "dummyDataGuy",
//     userImg:
//       "https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg",
//     img: "https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg",
//     caption: "this works good",
//   },
//   {
//     id: "123",
//     username: "dummyDataGuy",
//     userImg:
//       "https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg",
//     img: "https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg",
//     caption: "this works good",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts, "these are posts");

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
