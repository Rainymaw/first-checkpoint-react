import "./footer.css";
import pic from "../assets/pic.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">
          <span>Logo here</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            perferendis porro quibusdam consectetur, provident amet voluptates,
            velit explicabo modi molestias necessitatibus asperiores quidem.
            Doloremque tempora vel laudantium non. Nam, id!
          </p>
          <div className="social-media">
            <span>social</span>
            <span>social</span>
            <span>social</span>
            <span>social</span>
          </div>
        </div>
        <div className="footer-middle">
          <div>
            <h2>Quick links</h2>
            <p>What are we</p>
            <p>Roadmap</p>
            <p>Whitepaper</p>
            <p>Social network</p>
            <p>Join Us Now</p>
          </div>
          <div>
            <h2>Supports</h2>
            <p>Settings & privacy</p>
            <p>Help & support</p>
            <p>Terms & conditions</p>
            <p>24/7 Supports</p>
            <p>On Point FAQ</p>
          </div>
        </div>
        <div className="footer-right">
          <h2>News & Posts</h2>
          <div className="flex-container">
            <div className="img-container">
              <img src={pic} alt="" />
            </div>
            <div>
              <p>title of article</p>
              <p>Sep 23 2023</p>
            </div>
          </div>
          <div className="flex-container">
            <div className="img-container">
              <img src={pic} alt="" />
            </div>
            <div>
              <p>title of article</p>
              <p>Sep 23 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">All rights reserved</div>
    </footer>
  );
}

export default Footer;
