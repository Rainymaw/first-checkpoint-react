import "./landing.css";
function Landing() {
  return (
    <>
      <div className="landing">
        <h1 className="landing-title">KRⴹPTO, the future of WⴹB 3.0</h1>
        <p className="landing-description">
          Crypto Currency, Blockchain, ICO, Web3 related website template
          crafted with Tailwind CSS. Comes with all essential UI components and
          pages to launch complete website or landing page for anything that
          related to Crypto, Blockchain and Web3.
        </p>
        <div className="landing-cryptos">
          <span className="coins"></span>
          <span className="coins"></span>
          <span className="coins"></span>
          <span className="coins"></span>
          <span className="coins"></span>
          <span className="coins"></span>
        </div>
        <div className="landing-call">
          <input
            type="button"
            value="Buy tokens 42% Off"
            className="landing-buy"
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Landing;
