import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav'>
      <span>Joshua Stephen Kartes</span>
      <div className='nav-links'>
        <Link to='#'><span>About</span></Link>
        <Link to='#'><span>Portfolio</span></Link>
        <Link to='#'><span>Résumé</span></Link>
      </div>
    </div>
  );
}

export default Nav;
