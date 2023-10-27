import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);
  // console.log("This is movie",movies);
  return (
    <Container>
      <h4>Recommend for You</h4>
      <Content>
        {/* movies && is done to check whether the movies exists or not */}
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id} >
                <Link to={`detail/*/${movie.id}`} >
                <img
                src={movie.cardImg}
                alt=""
              />
                </Link>
             
            </Wrap>
          ))}
        {/* <Wrap>
          <img
            src="https://t3.ftcdn.net/jpg/03/26/22/48/240_F_326224870_vB8XRJbWr0qDG5bhAomLjVlKzcUXPdKA.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://wallpapers.com/images/featured/shin-chan-eg63lesamfj8c3o8.webp"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.pexels.com/photos/3748176/pexels-photo-3748176.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://wallpapers.com/images/featured/all-pokemon-pictures-bh730s8zr74xsc2p.webp"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://t3.ftcdn.net/jpg/03/26/22/48/240_F_326224870_vB8XRJbWr0qDG5bhAomLjVlKzcUXPdKA.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://wallpapers.com/images/featured/shin-chan-eg63lesamfj8c3o8.webp"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.pexels.com/photos/3748176/pexels-photo-3748176.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://wallpapers.com/images/featured/all-pokemon-pictures-bh730s8zr74xsc2p.webp"
            alt=""
          />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  margin-bottom : 100px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  ${
    "" /* inorder to show the border as image is going outside the border so we need to do overflow hidden */
  }
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
