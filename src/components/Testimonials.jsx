import "./testimonials.css";
import pic from "../assets/pic.jpg";
function Testimonials() {
  return (
    <div className="testimonials">
      <h3>Testimonials</h3>
      <h1>What our clients say</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
        inventore omnis quas aperiam autem hic iure quos! Nesciunt dignissimos
        nemo consequuntur vitae ratione temporibus corrupti illum, corporis eum.
        Obcaecati.
      </p>
      <div className="testimonial-container">
        <div className="testimonial-item">
          <div>
            <div className="testimonial-person">
              <img src={pic} alt="" />
            </div>
            <div>
              <h2 className="testimonial-name jason">Jason Keys</h2>
              <p className="testimonial-job">CEO & Founder @ KREPTO</p>
            </div>
          </div>
          <p className="testimonial-quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            harum tempore non minima quaerat est odit eaque. Molestiae, at
            exercitationem. Neque veritatis deleniti eum in omnis voluptate quo
            repellat debitis.
          </p>
        </div>
        <div className="testimonial-item">
          <div>
            <div className="testimonial-person">
              <img src={pic} alt="" />
            </div>
            <div>
              <h2 className="testimonial-name abdelkader">
                Abdelkader Bouraoui
              </h2>
              <p className="testimonial-job">CEO & Founder @ KREPTO</p>
            </div>
          </div>
          <p className="testimonial-quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            harum tempore non minima quaerat est odit eaque. Molestiae, at
            exercitationem. Neque veritatis deleniti eum in omnis voluptate quo
            repellat debitis.
          </p>
        </div>
        <div className="testimonial-item elizabeth">
          <div>
            <div className="testimonial-person">
              <img src={pic} alt="" />
            </div>
            <div>
              <h2 className="testimonial-name">Elizabeth Bethany</h2>
              <p className="testimonial-job">CEO & Founder @ KREPTO</p>
            </div>
          </div>
          <p className="testimonial-quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            harum tempore non minima quaerat est odit eaque. Molestiae, at
            exercitationem. Neque veritatis deleniti eum in omnis voluptate quo
            repellat debitis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
