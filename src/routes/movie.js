import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setGenres } from "../redux/actions/genreActions";
import { selectedMovie } from "../redux/actions/movieActions";
import { ActionTypes } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

export default function Movie() {
  let { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const [genres, setGenres] = useState([]);
  console.log(genres);
  const dispatch = useDispatch();

  const getMoviesDetail = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=2fccde01a371b106b09a241d6d1d5b49`
      )
      .catch((err) => {
        dispatch({
          type: ActionTypes.MOVIE_ERROR,
          payload: err,
        });
        console.log("Err", err);
      });
    setGenres(response.data.genres);
    dispatch(selectedMovie(response.data));
  };
  useEffect(() => {
    getMoviesDetail();
  }, [id]);
  console.log(movies);
  return (
    <div className='box'>
      <div className='box-head'>
        <div className='backdrop'>
          <div className='image-backdrop'>
            <img
              src={"http://image.tmdb.org/t/p/original" + movies.backdrop_path}
            />
          </div>
          <div className='overlay'>
            <div className='btm'>
              <div className='title'>
                <img
                  src={
                    "http://image.tmdb.org/t/p/original" + movies.poster_path
                  }
                />
                <h1>{movies.original_title}</h1>
              </div>
              <div className='status'>
                <span>{movies.adult ? "Adult" : "PG-13"}</span> |
                <span>{movies.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box-body'>
        <Row>
          <Col xs={"12"} md={"8"}>
            <div className='genre'>
              {genres.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
            <div className='description'>
              <h4>Overview</h4>
              <p>{movies.overview}</p>
            </div>
          </Col>
          <Col xs={"12"} md={"4"}>
            <div className='sidebar'>
              <p>
                <span className='vote'>{movies.vote_average}</span>
              </p>
              <ul className='sidelist'>
                <li>
                  User vote <br />
                  {movies.release_date}
                </li>
                <li>
                  User vote <br />
                  {movies.vote_count}
                </li>
                <li>
                  More Info
                  <br />
                  <a alt='homepage' href={movies.homepage}>
                    <i class='bx bx-link bx-sm'></i>
                  </a>
                  <a
                    alt='imdb'
                    href={"https://www.imdb.com/title/" + movies.imdb_id}>
                    <i class='bx bxl-imdb bx-sm'></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
