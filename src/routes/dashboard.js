import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../redux/types";
import { setMovies } from "../redux/actions/movieActions";
import { setGenres } from "../redux/actions/genreActions";
import DataTable from "react-data-table-component";
import { Col, Row } from "react-bootstrap";

export default function Dashboard() {
  const movies = useSelector((state) => state.allMovies.movies);
  const genres = useSelector((state) => state.allGenres.genres);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getGenres = async () => {
    setLoading(true);
    const response = await axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49"
      )
      .catch((err) => {
        dispatch({
          type: ActionTypes.GENRE_ERROR,
          payload: err,
        });
        console.log("Err", err);
      });
    dispatch(setGenres(response.data.genres));
    console.log(genres);
  };
  const getMovies = async () => {
    setLoading(true);
    const response = await axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1"
      )
      .catch((err) => {
        dispatch({
          type: ActionTypes.MOVIE_ERROR,
          payload: err,
        });
        console.log("Err", err);
      });
    dispatch(setMovies(response.data.results));
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);
  return (
    <>
      <div className='section1'>
        <Row>
          <Col>
            <h1>Movie Library</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='box border-top'>
              <h5>
                <i class='bx bx-movie bx-md'></i> Movies
              </h5>
              <p>{movies.length}</p>
            </div>
          </Col>
          <Col>
            <div className='box border-top'>
              <h5>
                <i class='bx bx-category bx-md'></i> Genres
              </h5>
              <p>{genres.length}</p>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <h5>Recent Movies</h5>
        </Col>
      </Row>
      <Row>
        {movies.slice(0, 6).map((item, index) => (
          <Col xs={"6"} md={"2"} key={index}>
            <a href={"/movie/" + item.id}>
              <div className='thumbnail'>
                <img
                  src={"http://image.tmdb.org/t/p/original" + item.poster_path}
                />
                <div className='overlay-thumbnail'>
                  <h5>{item.title}</h5>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
}
