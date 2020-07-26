import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ksoft-logo.png";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  //delete article by id
  const deleteArticle = (id) => {
    axios.delete(`/articles/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };
  return (
    <MainContainer>
      {/* welcome to articles component */}
      {!posts.length ? (
        <img src={logo} alt="logo" />
      ) : (
        posts.map((article, key) => (
          <div className="container" key={key}>
            <Link to={{pathname:`/article/${article._id}`}}>
              <h2>{article.title}</h2>
            </Link>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">
              {article.authorName}
            </span>
            <div className="row my-y card card-body">
              <div className="col-sm-2">
                <Link
                  to={`/update/${article._id}`}
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-2">
                <button
                  onClick={()=>deleteArticle(article._id)}
                  // onClick={()=>alert('hello')}
                  className="btn btn-outline-danger"
                >
                  Delete Article
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </MainContainer>
  );
};

export default Articles;
// Main Container
const MainContainer = styled.div`
  margin: 7rem 0;
  img {
    width: 10rem;
    display: block;
    margin: auto;
  }
`;
