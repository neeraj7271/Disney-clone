import React, { useEffect } from "react";
import styled from "styled-components";

import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

import {auth, provider} from "../firebase";

// after signout we need to be redirected to the home page 
import {useNavigate} from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
      }))
      navigate("/");
    }
    })
  },[])

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) =>{
      let user = result.user;
      dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
      }))
      navigate("/");
    })
  }

  const signOut = () => {
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      navigate("/login");
    })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn} >Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="" />
              <span>Home</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>Watchlist</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span>Originals</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>Series</span>
            </a>
            <UserImage onClick={signOut} src={userPhoto} />
          </NavMenu>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-transform: uppercase;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      ${
        "" /* using the after for the little animation of line below the links it acts as a div */
      }
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-original: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 5px 14px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;