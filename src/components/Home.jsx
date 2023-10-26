import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase"
import {useDispatch} from  "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
    const dispatch = useDispatch();
    // what does the useEffect do? whenever it load the the component/load the page basilly it will do whatever we are telling it to do
    useEffect(()=>{
        // onSnapshot it give us back the  picture of the database at a particular time we've called it.  whenever the database changes it will send the new picture of the database ie why the firebase is called live database
       
        db.collection("movies").onSnapshot((snapshot) =>{
            // console.log(snapshot);
            var tempMovies = snapshot.docs.map((doc) =>{
                console.log(doc.data());
                return { id: doc.id, ...doc.data()}
            })

            // console.log(tempMovies);
            //here the movie and home.jsx shares the same store containing the movies
            dispatch(setMovies(tempMovies));
        })
    },[])


    return(
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    ) 
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;


    ${'' /* before will add the div before the container */}
    ${'' /* / has been added becoz to set the background-position: cover */}
    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content:"";
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        ${'' /* z index -1 in done so that the content above on it should be visible ie. it should the behind the all the content above it */}
        z-index: -1;
    }
`;