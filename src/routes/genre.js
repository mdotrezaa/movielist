import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {ActionTypes} from '../redux/types';
import {setGenres} from '../redux/actions/genreActions';
import DataTable from 'react-data-table-component';

export default function Genre() {
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

    useEffect(() => {
      getGenres();
    }, []);
    console.log(genres);
    const columns = [
      {
          name: 'Name',
          selector: row => row.name,
      },
    ];
  return (
    <div>
      <div>
      <DataTable
      columns={columns}
      data={genres}
      />
      
    </div>
    </div>
  );
}