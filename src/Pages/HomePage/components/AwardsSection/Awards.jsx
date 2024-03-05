import { awardsCardsData } from '../../../../demodata';
import './Awards.css';

const FullRing = () => {
  return <div className="awards__fullRing"></div>;
};
const DoubleRing = () => {
  return (
    <div className="awards__DoubleRing-outer d-flex">
      <div className="awards__DoubleRing-inner"></div>
    </div>
  );
};

const Awards = () => {
  return (
    <div className="awards">
      <div className="awards__ring-top">
        <DoubleRing />
      </div>
      <div className="awards__ring-bottom">
        <FullRing />
      </div>
      <div className="awards__cards ">
        {awardsCardsData?.map((item, i) => (
          <div key={i} className="award__card d-flex">
            <span className="award__card-number">{item?.number}</span>
            <span className="award__card-name">{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
