"use client";

import { useState, useEffect } from "react";
import axios from "@/lib/api";

const useGetMovies = (page = 1, genre) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`/discover/movie?with_genres=${genre}&page=${page}`)
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, [page, genre]);

  return movies;
};

const useGetMoviesGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get("/genre/movie/list?genre=28")
      .then((res) => setGenres(res.data))
      .catch((err) => console.log(err));
  }, []);

  return genres;
};

const useGetMoviesUpcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get("/movie/upcoming")
      .then((res) => setUpcoming(res.data))
      .catch((err) => console.log(err));
  }, []);

  return upcoming;
};

const useGetMoviesById = (id) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`/movie/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return detail;
};

const useGetCastById = (id) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`/movie/${id}/credits`)
      .then((res) => setCast(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return cast;
};

const useGetMoviesReviewsById = (id) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`/movie/${id}/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return reviews;
};

export {
  useGetMovies,
  useGetMoviesGenres,
  useGetMoviesUpcoming,
  useGetMoviesById,
  useGetCastById,
  useGetMoviesReviewsById,
};
