import denverImg from '../assets/images/denver.jpeg';

const Home = () => {
  return (
    <div className='Home'>
      <div className='home-hero'>
        <img src={denverImg} />
        <span className='home-name'>Joshua Stephen Kartes</span>
        <span className='home-role'>
          Software Engineer & Full-Stack Developer
        </span>
      </div>
    </div>
  );
}

export default Home;
