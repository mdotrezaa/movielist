import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {ActionTypes} from '../redux/types';
import { setMovies } from '../redux/actions/movieActions';
import {setGenres} from '../redux/actions/genreActions';
import DataTable from 'react-data-table-component';

export default function Dashboard() {
  const movies = useSelector(state => state.allMovies.movies);
  const genres = useSelector(state => state.allGenres.genres.genres);
  const dispatch = useDispatch();

  const getGenres = async () => {
    const response = await axios
    .get("https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49")
    .catch((err) => {
        dispatch( {
            type: ActionTypes.GENRE_ERROR,
            payload: err,
        })
        console.log("Err", err);
    });
    dispatch(setGenres(response.data));
};
  const getMovies = async () => {
      const response = await axios
      .get("https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1")
      .catch((err) => {
          dispatch( {
              type: ActionTypes.MOVIE_ERROR,
              payload: err,
          })
          console.log("Err", err);
      });
      dispatch(setMovies(response.data.results));
  };

  useEffect(() => {
    getMovies();
    getGenres();
    
  }, []);

  const columns = [
    {
        name: 'Title',
        selector: row => row.original_title,
    },
    {
        name: 'Release Date',
        selector: row => row.release_date,
    },
    {
      name: 'Genre',
      cell: (row) => (
        <div>
          {row.genre_ids.map(el => {
          const colors = genres.filter(e => e.id === el);
          return (
            <div key={el.id}>
              {colors.map((c, i) => (
                <span key={i}> {c.name} </span>
              ))}
            </div>
          );
        })}
        </div>
      ),
    },
    {
      name: 'Cover',
      cell: row  => <img src={'http://image.tmdb.org/t/p/w185' + row.backdrop_path}/>,
    },
    {
      name: 'Info',
      cell: () => <i class='bx bx-info-circle bx-sm'></i>,
      right:true,
    },
  ];
  return (
    <div>
      <DataTable
      columns={columns}
      data={movies}
      />
      
    </div>
  );
}