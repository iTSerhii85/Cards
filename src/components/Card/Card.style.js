import styled from 'styled-components';
import picture from '../../img/picture.png';
import rectangle from '../../img/rectangle.png';
import boy from '../../img/boy.png';

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 23px;
  padding-bottom: 30px;
  /* padding: 28px 36px 36px 36px; */
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Picture = styled.div`
  /* position: relative; */
  width: 308px;
  height: 168px;
  background-image: url(${picture});
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 8px;
  margin-top: 18px;
  background-image: url(${rectangle});
`;

export const Boy = styled.div`
  position: absolute;
  top: 175px;
  left: 150px;
  width: 85.9232px;
  height: 80px;
  padding: 0px;
  border-radius: 85.9232px;
  background-image: url(${boy});
  padding: 10px 10px 10px 15px;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  height: 24px;
  width: fit-content;
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  background: #ebd8ff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;

export const StyledFollowingButton = styled.button`
  margin-top: 20px;
  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  background: #5cd3a8;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 66px;

  /* display: inline-block;
  position: absolute; */
`;
