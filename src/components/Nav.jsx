import { Link } from 'react-router-dom';
import resume from '../assets/documents/resume.pdf';

const Nav = () => {
  return (
    <div className='Nav'>
      <Link className='nav-name' to='/'>Joshua Stephen Kartes</Link>
      <div className='nav-links'>
        <Link className='nav-link' to='/about'>About</Link>
        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
        <a
          className='nav-link'
          href={resume}
          target='_blank'
          rel='noreferrer'
        >Résumé</a>
      </div>
    </div>
  );
}

export default Nav;
