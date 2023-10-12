import styled from "styled-components";

export const ModalView = styled.div`
    
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
export const ModalContentView = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
`
export const ModalHeaderView = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`
export const ModalBodyView = styled.div`
  padding: 16px;
`
export const ModalFooterView = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
`
export const CloseBtnComponent = styled.span`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover, &:focus{
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

export const DataInput = styled.input`
width: 96%;
padding: 15px;
margin: 5px 0px 22px 0;
display: inline-block;
border: none;
background: #f1f1f1;
&:focus {
    background-color: #ddd;
    outline: none;
}
`