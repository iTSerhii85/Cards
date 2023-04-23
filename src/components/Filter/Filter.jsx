import { BackDrop, HWrap, StyledButton, Wrapper } from './Filter.style';
import { IconContext } from 'react-icons';
import { FaHandPointLeft, FaTwitter } from 'react-icons/fa';
import { MyContext } from 'context';
import { useContext, useEffect } from 'react';

export const Filter = ({ filteredUsers }) => {
  const { setIsActive } = useContext(MyContext);

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setIsActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsActive]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      setIsActive(false);
    }
  };

  return (
    <BackDrop onClick={handleBackdropClick}>
      <Wrapper>
        <HWrap>
          <IconContext.Provider value={{ size: '40px' }}>
            <FaTwitter />
          </IconContext.Provider>
          <h2>FILTER</h2>
        </HWrap>
        <StyledButton type="button" onClick={() => filteredUsers('All')}>
          <p>All</p>{' '}
          <IconContext.Provider value={{ size: '30px' }}>
            <FaHandPointLeft />
          </IconContext.Provider>
        </StyledButton>
        <StyledButton type="button" onClick={() => filteredUsers('Follow')}>
          <p>Follow</p>{' '}
          <IconContext.Provider value={{ size: '30px' }}>
            <FaHandPointLeft />
          </IconContext.Provider>
        </StyledButton>
        <StyledButton type="button" onClick={() => filteredUsers('Following')}>
          <p>Following</p>{' '}
          <IconContext.Provider value={{ size: '30px' }}>
            <FaHandPointLeft />
          </IconContext.Provider>
        </StyledButton>
      </Wrapper>
    </BackDrop>
  );
};
