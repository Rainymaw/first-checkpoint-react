import "./team.css";
import pic from "../assets/pic.jpg";
function Team() {
  return (
    <div className="team">
      <h3>OUR TEAM</h3>
      <h1>Meet our team</h1>
      <p>Briliant minds have joined our greate team</p>
      <div className="team-container">
        <div className="team-item">
          <div className="team-img">
            <img src={pic} alt="" />
          </div>
          <h3>Machin Chose</h3>
          <p>BlockChain expert</p>
          <div className="social-medias">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            voluptas ullam quod impedit mollitia quos voluptates dolores totam
            sunt eius dicta quas praesentium, perferendis, exercitationem
            voluptatibus aliquid neque nihil expedita.
          </div>
        </div>
        <div className="team-item">
          <div className="team-img">
            <img src={pic} alt="" />
          </div>
          <h3>Machin Chose</h3>
          <p>BlockChain expert</p>
          <div className="social-medias">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            enim vero pariatur facilis. Est illum iusto ipsa voluptatum quos
            eveniet numquam laudantium? Magnam, vero. Quis quo recusandae non
            labore similique.
          </div>
        </div>
        <div className="team-item">
          <div className="team-img">
            <img src={pic} alt="" />
          </div>
          <h3>Machin Chose</h3>
          <p>BlockChain expert</p>
          <div className="social-medias">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id neque
            nulla eos doloremque, maiores minus deleniti! Doloremque aut ex,
            officiis sapiente, eaque, quia repellendus velit sit debitis optio
            quod at.
          </div>
        </div>
        <div className="team-item">
          <div className="team-img">
            <img src={pic} alt="" />
          </div>
          <h3>Machin Chose</h3>
          <p>BlockChain expert</p>
          <div className="social-medias">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            doloremque porro? Quibusdam a pariatur amet mollitia impedit
            explicabo quas atque, sed, aliquid excepturi necessitatibus
            temporibus voluptatibus quisquam placeat ipsa sit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
