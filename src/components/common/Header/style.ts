import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 1px 0 hsl(0deg 0% 80% / 80%);
  z-index: 2;
`;

export const HeaderWrap = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
`;

export const HeaderLogo = styled.div`
  min-width: 120px;
  max-width: 120px;
  margin-right: 40px;
  height: 100%;
  display: flex;
  img {
    width: 100%;
    object-fit: scale-down;
    margin: auto auto 23%;
  }
`;

export const HeaderItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderItem = styled.div<{ isSelect: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;
  padding-top: 48px;
  span {
    text-decoration: none;
    font-size: 18px;
    color: #5c5c5c;
    padding: 0px 7px;
    box-sizing: content-box;
    white-space: nowrap;
    cursor: pointer;
    ${({ isSelect }) =>
      isSelect &&
      css`
        color: ${palette.main};
        border-bottom: 3px solid ${palette.main};
      `}
    &:hover {
      color: ${palette.main};
    }
  }
`;

export const HeaderNewItemIcon = styled.div`
  width: 15px;
  height: 15px;

  position: absolute;
  right: -10px;
  top: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2px;
  font-weight: bold;
  color: white;
  background-color: rgb(33, 150, 243);
  border-radius: 100%;
`;

export const HeaderRelease = styled.div`
  min-width: 180px;
  max-width: 180px;
  height: 100%;
  display: flex;
  justify-content: end;
  margin-left: auto;
`;

export const HeaderNewItem = styled.div`
  border-radius: 100%;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderReleaseIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 24px;
  color: #2196f3;
  margin-top: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
  }
`;
