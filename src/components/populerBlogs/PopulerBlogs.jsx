import { XMarkIcon } from '@heroicons/react/24/solid';
import './PopulerBlogs.scss';

const PopulerBlogs = () => {
  return (
    <div className="populer-blogs">
      <h3 className="title">Popüler Bloglar</h3>
      <div className="items">
        <div className="item">
          <div className="item-left">
            <img
              src="https://img-s1.onedio.com/id-639c81c9ddb47bdd177a62fb/rev-0/w-620/f-jpg/s-f693c114e96b7c00645bf5d7113422dc7d043f8b.jpg"
              alt="user"
              className="user-img"
            />
            <div className="user-info">
              <span className="top">dimension20official</span>
              <span className="down">Dimension 20</span>
            </div>
          </div>
          <div className="item-right">
            <span>Takip et</span>
            <XMarkIcon width={15} className="cancel-icon" />
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img
              src="https://img-s1.onedio.com/id-639c81c9ddb47bdd177a62fb/rev-0/w-620/f-jpg/s-f693c114e96b7c00645bf5d7113422dc7d043f8b.jpg"
              alt="user"
              className="user-img"
            />
            <div className="user-info">
              <span className="top">dimension20official</span>
              <span className="down">Dimension 20</span>
            </div>
          </div>
          <div className="item-right">
            <span>Takip et</span>
            <XMarkIcon width={15} className="cancel-icon" />
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img
              src="https://img-s1.onedio.com/id-639c81c9ddb47bdd177a62fb/rev-0/w-620/f-jpg/s-f693c114e96b7c00645bf5d7113422dc7d043f8b.jpg"
              alt="user"
              className="user-img"
            />
            <div className="user-info">
              <span className="top">dimension20official</span>
              <span className="down">Dimension 20</span>
            </div>
          </div>
          <div className="item-right">
            <span>Takip et</span>
            <XMarkIcon width={15} className="cancel-icon" />
          </div>
        </div>
        <div className="item">
          <div className="item-left">
            <img
              src="https://img-s1.onedio.com/id-639c81c9ddb47bdd177a62fb/rev-0/w-620/f-jpg/s-f693c114e96b7c00645bf5d7113422dc7d043f8b.jpg"
              alt="user"
              className="user-img"
            />
            <div className="user-info">
              <span className="top">dimension20official</span>
              <span className="down">Dimension 20</span>
            </div>
          </div>
          <div className="item-right">
            <span>Takip et</span>
            <XMarkIcon width={15} className="cancel-icon" />
          </div>
        </div>
      </div>
      <p className="show-more">Daha fazla blog göster</p>
    </div>
  );
};

export default PopulerBlogs;
