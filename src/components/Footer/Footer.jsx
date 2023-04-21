import { Link } from 'react-router-dom';
import { Wrapper } from './Footer.style';

export const Footer = () => {
  return (
    <Wrapper>
      Developed by{' '}
      <Link to="https://github.com/iTSerhii85" target="_blank">
        iTSerhii
      </Link>{' '}
      <span>|</span> 2023 <span>|</span>
    </Wrapper>
  );
};
