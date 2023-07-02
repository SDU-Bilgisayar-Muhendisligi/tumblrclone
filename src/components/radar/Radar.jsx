import {
  ArrowUturnRightIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  FireIcon,
} from '@heroicons/react/24/solid';
import './Radar.scss';

const Radar = () => {
  return (
    <div className="radar">
      <h3 className="title">Radar</h3>
      <div className="radar-card">
        <div className="radar-header">
          <img
            src="https://i.sozcucdn.com/wp-content/uploads/2023/01/24/depophotos_17512811-2.jpeg?w=900&h=900&mode=crop&scale=both"
            alt="user"
          />
          <span className="username">stiiria</span>
          <span className="follow">Takip et</span>
          <span className="uc-nokta">...</span>
        </div>
        <div className="radar-img-wrapper">
          <img
            src="https://cdn.paperpile.com/guides/img/credible-blog-illustr-1400x1400.png"
            alt="post"
          />
        </div>
        <div className="fire-wrapper">
          <FireIcon width={30} /> Ateşle
        </div>
        <div className="radar-footer">
          <span>1358 not</span>
          <div className="radar-footer-icons">
            <ArrowUturnRightIcon width={30} />
            <ArrowPathRoundedSquareIcon width={30} />
            <HeartIcon width={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radar;
