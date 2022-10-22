import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80vh;
    border-radius: 30px;
    overflow: hidden;
`

export const Group = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`

export const HR = styled.div`
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color:#000;
  height: 1px;
`