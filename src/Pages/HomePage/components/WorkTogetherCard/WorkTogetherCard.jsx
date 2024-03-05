/* eslint-disable react/no-unescaped-entities */
import './WorkTogether.css';

const TopCircle = () => {
  return (
    <div className="work-together__top-circle linear-gradient--green"></div>
  );
};
const BottomCircle = () => {
  return (
    <div className="work-together__bottom-circle linear-gradient--green d-flex">
      <div className="work-together__bottom-inner"></div>
    </div>
  );
};

const WorkTogetherCard = () => {
  return (
    <div className="work-together d-flex">
      <div className="work-together__card d-flex">
        <TopCircle />
        <BottomCircle />
        <div className="work-together__line"></div>
        <h2 className="work-together__title">Lets Work Together</h2>
        <p className="work-together__text">
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn
        </p>
        <button className="work-together__btn btn--primary ">Contact Me</button>
      </div>
    </div>
  );
};

export default WorkTogetherCard;
