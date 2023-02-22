import './App.css';
import { Element, Link } from 'react-scroll';

function App() {
  const renderMenu = (name: string) => {
    return (
      <Link
        activeClass='active'
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {name}
      </Link>
    );
  };
  return (
    <div>
      <div>
        <ul className='wrapperMenu'>
          <li>{renderMenu('Home')}</li>
          <li>{renderMenu('Blog')}</li>
          <li>{renderMenu('Product')}</li>
          <li>{renderMenu('About')}</li>
          <li>{renderMenu('Contact')}</li>
        </ul>
      </div>

      <div>
        <Element name='home' className='element'>
          Home
        </Element>
        <Element name='blog' className='element'>
          Blog
        </Element>
        <Element name='product' className='element'>
          Product
        </Element>
        <Element name='about' className='element'>
          About
        </Element>
        <Element name='contact' className='element'>
          Contact
        </Element>
      </div>
    </div>
  );
}

export default App;
