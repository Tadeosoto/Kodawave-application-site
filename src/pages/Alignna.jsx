import { Link } from "react-router-dom";
import "./Alignna.css";
import caennaJadeSuaveUrl from "../assets/michPageAssets/logos-icons/Caenna-JadeSuave.png";
import alignnaBlancoRotoUrl from "../assets/michPageAssets/logos-icons/Alignna-BlancoRoto.svg";
import bolaRosaUrl from "../assets/michPageAssets/pageDecoration/bola rosa(1).png";

const Alignna = () => {
  return (
    <div className="alignnaPage">
      <section className="alignnaHero">
        <div className="alignnaPage__bg" aria-hidden />
        <header className="alignnaPage__header">
          <Link to="/" aria-label="Volver al inicio" className="alignnaPage__homeLink">
            <img src={caennaJadeSuaveUrl} alt="Caenna" className="alignnaPage__caennaLogo" decoding="async" />
          </Link>
        </header>

        <main className="alignnaPage__center">
          <img src={alignnaBlancoRotoUrl} alt="Alignna" className="alignnaPage__alignnaLogo" decoding="async" />
          <p className="alignnaPage__tagline">
            Tu eres el <strong>escultor</strong> y la <strong>escultura</strong>.
          </p>
        </main>
      </section>

      <section className="alignnaBreakSection" aria-label="Momento de romper paradigmas">
        <div className="alignnaBreakSection__inner">
          <div className="alignnaBreakSection__visual">
            <img
              src={bolaRosaUrl}
              alt=""
              className="alignnaBreakSection__bgImage"
              decoding="async"
            />
            <div className="alignnaBreakSection__visualOverlay" aria-hidden />
            <p className="alignnaBreakSection__quote">“Es momento de romper paradigmas.”</p>
          </div>
          <div className="alignnaBreakSection__text">
            <p className="alignnaBreakSection__headline">Algo no estaba bien.</p>
            <p className="alignnaBreakSection__copy">
              Por años usamos lo mismo.
              <br />
              Con queja, pero sin <strong>cuestionarlo.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alignna;
