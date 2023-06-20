import styled from "styled-components";

import { ReactComponent as MagnifyingGlass } from "../../assets/lupa.svg";

export const SearchContainer = styled.div`
  margin-top: 30px;
  margin-left: 15%;
  height: 30px;
  width: 70%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  width: 15%;
  font-family: cursive;
  padding: 12px 20px;
  border: solid #804000 1px;
  border-radius: 7px 0px 0px 7px;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px #808080;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 20px;
  height: 30px;
  fill: #ffff14;

  &:hover {
    scale: 1.3;
  }
`;

export const SearchIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: crosshair;
  background-color: black;
  padding: 10px;
  border: solid #804000 1px;
  border-radius: 0px 7px 7px 0px;

  &:hover {
    box-shadow: inset 0 0 10px #ffff14;
  }
`;
