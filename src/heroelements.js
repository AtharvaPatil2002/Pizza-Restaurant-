import img1 from './462773.jpg';
export const HeroContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};
export const HeroContent = () => {
  return (
    <div
      style={{
        height: '100vh -80px',
        maxheight: '100%',
        width: '100vw',
        padding: '0rem',
      }}
    ></div>
  );
};
export const HeroItems = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        maxHeight: '100%',
        padding: '0 2rem',
        width: '650px',
        color: 'white',
        textTransform: 'uppercase',
        lineHeight: '1',
        fontWeight: 'bold',
      }}
    ></div>
  );
};
export const HeroH1 = () => {
  return (
    <div
      style={{
        height:'100px',
        
      }}
    ><p>k</p></div>
  );
};
export const HeroP = () => {
  return (
    <div
      style={{
        fontSize: 'clamp(2rem, 2.5vw, 3rem)',
        marginBottom: '2rem',
      }}
    ></div>
  );
};
export const HeroBtn = () => {
  return (
    <div
      className='button'
      style={{
        fontSize: '1.4rem',
        padding: '1rem 4rem',
        border: 'none',
        background: '#e31837',
        color: '#ffff',
        transition: '0.2s ease-out',
      }}
    ></div>
  );
};
