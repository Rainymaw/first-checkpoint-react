import "./blogs.css";
import pic from "../assets/pic.jpg";
function Blogs() {
  return (
    <div className="blog">
      <h3>Latest news</h3>
      <h2>Recent news & blogs</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis adipisci,
        cupiditate et modi aliquam magni reprehenderit. Possimus iure repellat
        beatae, nam, sunt ea nisi distinctio hic commodi reprehenderit minima
        natus?
      </p>
      <div className="blog-container">
        <div className="blog-card">
          <div className="blog-img">
            <img src={pic} alt="" />
          </div>
          <div className="blog-author">
            <span className="blog-name">Admin</span>
            <span className="blog-date">26/03/2024</span>
          </div>
          <h2 className="blog-title">Bitcoin going at a higher rate</h2>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deleniti explicabo beatae quisquam molestias! Cum vitae dignissimos,
            nulla voluptate aut illo soluta reiciendis voluptatem aspernatur.
            Porro odit quas illum eaque!
          </p>
        </div>
        <div className="blog-card">
          <div className="blog-img">
            <img src={pic} alt="" />
          </div>
          <div className="blog-author">
            <span className="blog-name">Admin</span>
            <span className="blog-date">26/03/2024</span>
          </div>
          <h2 className="blog-title">Bitcoin going at a higher rate</h2>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deleniti explicabo beatae quisquam molestias! Cum vitae dignissimos,
            nulla voluptate aut illo soluta reiciendis voluptatem aspernatur.
            Porro odit quas illum eaque!
          </p>
        </div>
        <div className="blog-card">
          <div className="blog-img">
            <img src={pic} alt="" />
          </div>
          <div className="blog-author">
            <span className="blog-name">Admin</span>
            <span className="blog-date">26/03/2024</span>
          </div>
          <h2 className="blog-title">Bitcoin going at a higher rate</h2>
          <p className="blog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deleniti explicabo beatae quisquam molestias! Cum vitae dignissimos,
            nulla voluptate aut illo soluta reiciendis voluptatem aspernatur.
            Porro odit quas illum eaque!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
