/* eslint-disable react/prop-types */
import ReplyIcon from '@mui/icons-material/Reply';
import './SimpleSectionCard.css';
const SimpleSectionCard = ({ title, text, caption, image, size = '' }) => {
  const styleTopRing = {
    width: `${
      (size == 'sm' && '14vw') ||
      (size == 'md' && '22vw') ||
      (size == 'lg' && '20vw')
    }`,
    height: `${
      (size == 'sm' && '14vw') ||
      (size == 'md' && '22vw') ||
      (size == 'lg' && '20vw')
    }`,
  };
  const styleBottomRing = {
    width: `${
      (size == 'sm' && '18vw') ||
      (size == 'md' && '15vw') ||
      (size == 'lg' && '25vw')
    }`,
    height: `${
      (size == 'sm' && '18vw') ||
      (size == 'md' && '15vw') ||
      (size == 'lg' && '24vw')
    }`,
  };
  const styleRingTop = {
    background: `linear-gradient(
        180deg,
        ${
          size == 'sm' || size == 'lg'
            ? 'rgba(100, 244, 172, 1) 0%, rgba(50, 122, 86, 1) 50%'
            : size == 'md'
            ? 'rgba(254,205,26,1) 0%, rgba(127,102,13,1) 70%'
            : ''
        }
      )`,
  };
  const styleRingBottom = {
    background: `linear-gradient(
        180deg,
        ${
          size == 'sm' || size == 'lg'
            ? 'rgba(254,205,26,1) 0%, rgba(127,102,13,1) 70%'
            : size == 'md'
            ? 'rgba(100, 244, 172, 1) 0%, rgba(50, 122, 86, 1) 50%'
            : ''
        }
      )`,
  };
  const styleInnerRingTop = {
    width: `${
      (size == 'sm' && '68%') ||
      (size == 'md' && '64%') ||
      (size == 'lg' && '45%')
    }`,
    height: `${
      (size == 'sm' && '68%') ||
      (size == 'md' && '64%') ||
      (size == 'lg' && '45%')
    }`,
  };
  const styleInnerRingBottom = {
    width: `${
      (size == 'sm' && '50%') ||
      (size == 'md' && '50%') ||
      (size == 'lg' && '70%')
    }`,
    height: `${
      (size == 'sm' && '50%') ||
      (size == 'md' && '50%') ||
      (size == 'lg' && '70%')
    }`,
  };
  return (
    <div
      className={`simple-sec__card d-flex ${size !== '' ? 'flex-reverse' : ''}`}
    >
      <div className="simple-sec__details d-flex">
        <div className="simple-sec__details__wrapper d-flex">
          <div className="simple-sec__details-caption d-flex">
            <span className="intro__line--graphic"></span>
            <span className="-intro">{caption}</span>
          </div>

          <h2>{title}</h2>
          <p>{text}</p>
          <div className="btn--secondary d-flex">
            <ReplyIcon className="--btn-secondary_icon" fontSize="large" />
            <span className="btn-text--secondary ">Read More</span>
          </div>
        </div>
      </div>

      <div className="simple-section__img-container d-flex">
        <div className="simple-section__img-wrapper">
          <div className="simple-section__img-shade"></div>
          <img src={image} alt="" />
        </div>
      </div>
      {size != '' && (
        <>
          <div style={styleTopRing} className="portfolio-ring-top">
            <div className="portfolio-ring-top__wrapper">
              <div
                style={styleRingTop}
                className="portfolio-ring__ring d-flex "
              >
                <div
                  style={styleInnerRingTop}
                  className="portfolio-ring__inner"
                ></div>
              </div>
            </div>
          </div>
          <div style={styleBottomRing} className="portfolio-ring-bottom">
            <div className="portfolio-ring-bottom__wrapper">
              <div
                style={styleRingBottom}
                className="portfolio-ring__ring d-flex"
              >
                <div
                  style={styleInnerRingBottom}
                  className="portfolio-ring__inner"
                ></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SimpleSectionCard;
