import "./newsletter.css";

function Newsletter(props) {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <h2>Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          quam nec ante aliquet fringilla vel at erat.
        </p>
      </div>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter email address" required />
        <button type="submit">Submit &rarr;</button>
      </form>
    </div>
  );
}

export default Newsletter;
