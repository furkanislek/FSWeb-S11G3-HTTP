import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

const EditMovieForm = (props) => {
  const { push } = useHistory();
  const { id } = useParams();
  const { serverMovies } = props;
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description: "",
  });

    useEffect(() => {
  	axios
  		.get(`http://localhost:9000/api/movies/${id}`)
		.then((res) => {
			setMovie(res.data)
		})
    }, [id])

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: id ? "put" : "post",
      url: "http://localhost:9000/api/movies/" + (id ? id : ""),
      data: movie,
    })
    .then((res) => {
        const lastUrl = res.data[res.data.length-1].id;
        serverMovies(res.data);
        push(`/movies/${lastUrl}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   0
// : 
// {id: "b4sb1", title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson",…}
// 1
// : 
// {id: "PaO95", title: "Terminator 2: Judgement Day", director: "James Cameron", metascore: 94,…}
// 2
// : 
// {id: "wdVQU", title: "Dumb and Dumber", director: "The Farely Brothers", metascore: 76,…}
// 3
// : 
// {id: "D1ACk", createdAt: "2023-01-05T18:50:49+03:00", title: "asd", director: "sadsa", genre: "asd",…}
// 4
// : 
// {id: "3d1LV", createdAt: "2023-01-05T18:51:09+03:00", title: "asd", director: "xca", genre: "qwe1",…}
// 5
// : 
// {id: "jwJY8", createdAt: "2023-01-05T18:51:59+03:00", title: "113123", director: "adasd",…}
// 6
// : 
// {id: "Ng4-q", createdAt: "2023-01-05T18:52:46+03:00", title: "asdsad", director: "czxczx",…}
// 7
// : 
// {id: "_4hp9", createdAt: "2023-01-05T18:53:56+03:00", title: "film", director: "deneme", genre: "dram",…}
  const { title, director, genre, metascore, description } = movie;

  return (
    <div className="col">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h4 className="modal-title">
              Editing <strong>{movie.title}</strong>
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                value={title}
                onChange={handleChange}
                name="title"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Director</label>
              <input
                value={director}
                onChange={handleChange}
                name="director"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Genre</label>
              <input
                value={genre}
                onChange={handleChange}
                name="genre"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Metascore</label>
              <input
                value={metascore}
                onChange={handleChange}
                name="metascore"
                type="number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={handleChange}
                name="description"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-info" value="Save" />
            <Link to={`/movies/1`}>
              <input type="button" className="btn btn-default" value="Cancel" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovieForm;
