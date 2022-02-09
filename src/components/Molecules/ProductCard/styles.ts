import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 20px 10px;
  display: flex;
  margin-bottom: 28px;

  img {
    min-width: 280px;
  }

  @media (max-width: ${Theme.breakPoints.notebook}) {
    padding: 10px 5px;
    img {
      min-width: 200px;
    }
  }
`;

export const InfosDiv = styled.div`
  margin-left: 23px;
  padding: 10px 50px 10px 0px;
  height: 100%;

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: #2C2C2C;
  }

  h6 {
    margin: 10px 0px 25px;
    font-size: 12px;
    font-weight: 300;
    color: #7E7E7E;

    b {
      font-weight: 800;
    }
  }

  > p {
    font-size: 14px;
    font-weight: 300;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 6;
   -webkit-box-orient: vertical;
  }

  @media (max-width: ${Theme.breakPoints.notebook}) {
    margin-left: 13px;
    padding: 5px 25px 5px 0px;
  }
`;

export const DividerLine = styled.div`
  width: 1px;
  height: 100%;
  background: #DADADA;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 21px;
  button {
    width: 186px;
  }

  h4{
    font-size: 18px;
    color: #2C2C2C;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    color: #999999;

    span{
      font-size: 14px;
    }

    svg {
      width: 16px;
      height: 16px;
      margin: 0px 6px 0px 0px;
    }
  }

  @media (max-width: ${Theme.breakPoints.notebook}) {
    button {
      width: 160px;
    }
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 10px;
    button {
      width: 130px;
    }
  }
`;

export const RatingDiv = styled.div`
  background: #787878;
  position: absolute;
  right: 50px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  padding: 6px 10px;

  span {
    color: #fff;
  }

  svg {
    width: 14px;
    height: 14px;
    color: #fff;
    margin: 2px 0px 0px 5px;
  }

  @media (max-width: ${Theme.breakPoints.ipad}) {
      right: -65px;
  }

  @media (max-width: ${Theme.breakPoints.ipadMini}) {
      right: -120px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
      right: 21px;
      padding: 3px 7px;
  }
`;

export const ContainerMobile = styled.div`
  width: 100%;
  height: 250px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 20px 10px;
  display: flex;
  margin-bottom: 28px;

  div {
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    padding-right: 5px;
  }

`;

export const InfosDivMobile = styled.div`
  display: flex;

  h4 {
    font-size: 16px;
    font-weight: 400;
    color: #2C2C2C;

    @media (max-width: ${Theme.breakPoints.mobile}) {
      font-size: 13px;
    }
  }

  h6 {
    margin: 10px 0px 25px;
    font-size: 12px;
    font-weight: 300;
    color: #7E7E7E;

    @media (max-width: ${Theme.breakPoints.mobile}) {
      margin-left: 0px;
      margin: 5px 0px 15px;
      font-size: 11px;
    }

    b {
      font-weight: 800;
    }
  }

  

  @media (max-width: ${Theme.breakPoints.notebook}) {
    margin-left: 13px;
    padding: 5px 25px 5px 0px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    margin-left: 0px;
    padding: 0;
  }
`;

