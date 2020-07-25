import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import {
  Header,
  Navbar,
  Footer,
  Articles,
  Article,
  AddArticle,
  EditArticle,
} from "./components/index";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/articles")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/article/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <EditArticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
      <Footer />
    </div>
  );
};

export default App;
