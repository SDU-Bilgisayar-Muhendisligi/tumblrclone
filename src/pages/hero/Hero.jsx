import BlogCard from '../../components/blogCard/BlogCard';
import PopulerBlogs from '../../components/populerBlogs/PopulerBlogs';
import {
  RectangleGroupIcon,
  QueueListIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/solid';

import './Hero.scss';
import { useState } from 'react';
import Radar from '../../components/radar/Radar';

const Hero = () => {
  const [isCliked, setIsCliked] = useState(false);

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-titles">
            <h3 className="active-title">Bugün</h3>
            <h3>Popüler</h3>
            <h3>Ekibin seçtikleri</h3>
            <div onClick={() => setIsCliked(!isCliked)} className="others">
              <h4>Diğer</h4>
              <ArrowDownCircleIcon width={20} />
              {isCliked && (
                <div className="other-titles">
                  <h5>Metin</h5>
                  <h5>Fotoğraflar</h5>
                  <h5>GIF&apos;ler</h5>
                  <h5>Alıntılar</h5>
                  <h5>Sohbetler</h5>
                  <h5>Ses</h5>
                  <h5>Videolar</h5>
                  <h5>Sorular</h5>
                </div>
              )}
            </div>
            <div className="titles-icons">
              <RectangleGroupIcon className="rect-icon" width={25} />
              <QueueListIcon width={25} />
            </div>
          </div>
          <div className="hero-today">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="hero-right">
          <PopulerBlogs />
          <Radar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
