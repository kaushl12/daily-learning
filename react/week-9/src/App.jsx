import { useState, useEffect } from "react";

import { PostComponent } from "./components/post";
import { Bell } from "./components/bell";
import { Tab } from "./components/Tab";
import { Card } from "./components/card";
function App() {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShow(currentValue => !currentValue);
    }, 5000);
  }, []);

  let postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Kaushal Chaudhari",
        subtitle: "500 followers",
        time: "2h ago",
        image:
          "https://img.freepik.com/photos-premium/designer-graphique-avatar-numerique-ia-generative_934475-9292.jpg",
        description: "Hello my name is kaushal",
      },
    ]);
  }
  return (
    <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
      {show && <Bell />}

      <Tab />

      <Card>
        <h1>My name is Kaushal</h1>
        <input type="text" name="" id="" />
      </Card>
      <Card>
        <h1>My name is React</h1>
        <input type="text" name="" id="" />
      </Card>

      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>{postComponents}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
