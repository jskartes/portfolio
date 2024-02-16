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

      <div className='home-about'>
        <span>Hello, world!</span>
        <p>I am a recent convert to professional software development, coming from two decades of work as a full-time musician. I'm currently based in beautiful Arvada, Colorado.</p>
        <p>I am fueled by boundless creativity ... and coffee.</p>
      </div>
    </div>
  );
}

export default Home;
