import RadioButtonChecked from "@mui/icons-material/RadioButtonChecked";
import styled from "styled-components";


export const Container = styled.div`
  position: absolute;
  background-color: black;
  width: 100vw;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Video = styled.video`
  position: absolute;
  background-color: black;
  height: 100vh;
`;

export const VideoControl = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  opacity: 100;
  z-index: 1;
`;

export const Surface = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 0.2749693627450981) 0%,
    rgba(7, 6, 92, 0) 20%,
    rgba(9, 9, 121, 0) 80%,
    rgba(2, 0, 36, 0.27777048319327735) 100%
  );
`;


export const RecordButton = styled.button`
    background-color: transparent;
    border: none;
`

export const RecordStateLabel = styled.p`
    position: absolute;
    margin: 0px;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 6px 8px;
    opacity: ${(props) => props.active ? 1 : 0.4};
    background-color: white;
`

export const LinkPreview = styled.a`
position: absolute;
text-decoration: none;
color: black;
top: 0;
right: 0;
padding: 0.5em;
background-color: #ffffff;
z-index:1
`