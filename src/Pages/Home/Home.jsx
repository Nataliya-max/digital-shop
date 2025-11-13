import './Home.css';
import { useOnScreen } from '../../hooks/useOnScreen';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [refShop, visibleShop] = useOnScreen({ threshold: 0.2 });
  const [refDigital, visibleDigital] = useOnScreen({ threshold: 0.2 });
  const [refContact, visibleContact] = useOnScreen({ threshold: 0.2 });

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Sección principal Home */}
      <section className="home-section" id="home">
        <div className="overlay">
          <h1>Bienvenido a Digital Kit</h1>
          <p>Scroll hacia abajo para explorar nuestras secciones.</p>
        </div>
      </section>

      {/* Shop */}
      <section
        ref={refShop}
        className={`scroll-section clickable ${visibleShop ? 'show' : ''}`}
        onClick={() => handleNavigate('/shop')}
        id="shop"
      >
        <h2>Tienda</h2>
        <p>Explora nuestros productos y servicios.</p>
      </section>

      {/* Digital Kit */}
      <section
        ref={refDigital}
        className={`scroll-section clickable ${visibleDigital ? 'show' : ''}`}
        onClick={() => handleNavigate('/digitalkit')}
        id="digitalkit"
      >
        <h2>Digital Kit</h2>
        <p>Descubre cómo Digital Kit puede ayudarte a crecer.</p>
      </section>

      {/* Contact */}
      <section
        ref={refContact}
        className={`scroll-section clickable ${visibleContact ? 'show' : ''}`}
        onClick={() => handleNavigate('/contact')}
        id="contact"
      >
        <h2>Contacto</h2>
        <p>Ponte en contacto con nosotros para más información.</p>
      </section>
    </div>
  );
}
