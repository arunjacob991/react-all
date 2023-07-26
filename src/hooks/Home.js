import React, { useState, useEffect } from "react";

const Home = () => {
  const [content, setContent] = useState("UseState--yyoo");

  useEffect(() => {
    console.log("content")

    return () => {
        console.log("cleared")
    }

  },[content])

  return (
    <>
      <div>Back in reactjs....yyoooo</div>
      <button onClick = {() => setContent("posts")}>posts</button>
      <button onClick = {() => setContent("users")}>users</button>
      <button onClick = {() => setContent("comments")}>comments</button>
      <div>{content}</div>
    </>
  );
};

export default Home;
