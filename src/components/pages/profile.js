
import React from 'react';
import styled from 'styled-components'
import eyeBtn from '../renes-icons/eye.svg'
import accountBtn from '../renes-icons/2.png'
  
const Profile = () => {
  return (
    <div>
        <H1>profile</H1>
        <IMG className="eye" src={accountBtn} alt="logo" />
        <SVG src={eyeBtn}></SVG>
    </div>

  );
};
  
const H1 = styled.h1`
color: white;

`
const IMG = styled.image`

width: 40px;
height: 40px;
position: relative;
top: 10px;
left: 10px;
padding: 50px;
cursor: pointer;

`
const SVG = styled.svg`
color: white;
width: 40px;
height: 40px;
position: relative;
top: 100px;
left: 100px;
`


export default Profile;