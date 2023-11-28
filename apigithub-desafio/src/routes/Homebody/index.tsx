import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Homebody() {
  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <h2>Desafio Github API</h2>
            <h3>DevSuperior - Escola de programação</h3>
          </div>
          <Link to="/search">
          <Button text="Começar" />
          </Link>
        </section>
      </main>
    </>
  );
}
