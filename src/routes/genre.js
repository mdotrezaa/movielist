import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../redux/types";
import { setGenres } from "../redux/actions/genreActions";
import DataTable from "react-data-table-component";
import { Col, Row } from "react-bootstrap";

const customStyles = {
  rows: {
    style: {},
  },
  headCells: {
    style: {
      borderTopRightRadius: "2px",
    },
  },
  cells: {
    style: {},
  },
};
export default function Genre() {
  const genres = useSelector((state) => state.allGenres.genres);
  const dispatch = useDispatch();

  const getGenres = async () => {
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
  };

  useEffect(() => {
    getGenres();
  }, []);
  console.log(genres);
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
  ];
  return (
    <div>
      <Row>
        <Col>
          <h1>All Genres</h1>
        </Col>
      </Row>
      <DataTable
        className='tablestyle'
        columns={columns}
        data={genres}
        customStyles={customStyles}
      />
    </div>
  );
}
