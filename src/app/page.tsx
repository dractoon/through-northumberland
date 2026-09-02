export default function Home() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="page-title">
        <div className="copy">
          <h1 id="page-title">
            Coming
            <br />
            soon.
          </h1>

          <div className="rule" aria-hidden="true" />

          <p className="intro">
            <strong>Through Northumberland</strong> is on its way — a new place
            to discover the people, places, food and stories that make
            Northumberland special.
          </p>

          <p className="small-note">
            Something worth exploring is coming.
          </p>
        </div>

        <div className="visual" aria-hidden="true">
          <div className="visual-card">
            <img
              src="./assets/through-northumberland-mark.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Northumberland, England</span>
        <span className="footer-line" />
        <span>Est. 2026</span>
      </footer>
    </main>
  );
}