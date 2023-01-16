import "./Header.css";
import { useMediaQuery } from "react-responsive";


const Header = () => {

  const isMobile = !useMediaQuery( { minWidth: 930 } );

  const isTinyMobile = !useMediaQuery( { minWidth: 550 } );

  const titulo = "Instituto Politécnico Nacional";

  const src = "https://jrodp.files.wordpress.com/2014/04/logo-ipn-blanco.png";

  const autor = "Juan Carlos Salcedo Licea";

  return(
    <div className="Header">
      <div className="Header-Titulo">{ isTinyMobile ? "IPN" : titulo }</div>
      <img src={src} alt="ipn" className="Header-Logo" style={ isMobile ? { marginRight : 35 } : {}} />
      { !isMobile ? <div className="Header-Autor">{ autor }</div> : null }
    </div>
  );
};

export default Header;