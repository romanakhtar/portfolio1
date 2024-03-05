import './Ring.css';

const Ring = () => {
  return (
    <div className="outerRing">
      <div className="ring1-m d-flex">
        <div className=" ring1 d-flex">Id</div>
      </div>
      <div className="ring2-m d-flex">
        <div className=" ring2 d-flex">Ps</div>
      </div>
      <div className="ring3-m d-flex">
        <div className=" ring3 d-flex">Ai</div>
      </div>
      <div className="ring4-m d-flex">
        <div className=" ring4 d-flex">Xd</div>
      </div>

      <div className="innerRing"></div>
    </div>
  );
};

export default Ring;
