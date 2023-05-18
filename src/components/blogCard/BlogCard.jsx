import {
  ArrowUturnRightIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/solid';

import './BlogCard.scss';
import { useState } from 'react';

const BlogCard = () => {
  const [isCliked, setIsCliked] = useState(false);
  const [isNoteCliked, setIsNoteCliked] = useState(false);

  return (
    <div className="blog-card">
      <div className="card-image-wrapper">
        <img
          src="https://cdn.vox-cdn.com/thumbor/g2X0tbPienfJ_FvC6zA_67ysajw=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24087490/STK137_Tumblr_K_Radtke_01.jpg"
          alt="logo"
        />
      </div>
      <div className="blog-card-detail">
        <div className="card-header">
          <p>todayontumblr</p>
          <p className="follow">Takip et</p>
          <div onClick={() => setIsCliked(!isCliked)} className="more-icon">
            <EllipsisHorizontalIcon width={31} />
            {isCliked && (
              <div className="other-titles">
                <h5>Çarşamba 17:17</h5>
                <h5>İçerik Uyarısı: Herkes</h5>
                <h4>Bağlantıyı Kopyala</h4>
                <h5 className="delete">Sil</h5>
              </div>
            )}
          </div>
        </div>
        <h2>Wednesday May 17.</h2>
        <h3>Five Nights at Freddy's.</h3>
        <p className="card-desc">
          If we're totally honest with you, if there were a list of ways we
          would like to spend a night, even just one at Freddy's would be pretty
          low down our collective list. Five, however, seems pretty excessive.
          Unnecessary even. Just think of the alternatives: a movie night.
          Evening class in a new language. A sleepover. Binge-watch Lost (2004).
          Sleeping. Stand-up comedy. Camping beneath the constellations. Come in
          a little drunk and spend, say, seven or eight hours just watching the
          cat. Listening to audiobooks. Of all the fun to bed had when the sun
          goes down, suffice to say spending five nights at Freddy's (or #fnaf,
          as they kids seem to be saying) seems a pretty odd way to spend your
          one and precious life on God's green Earth. Needless to say, the
          first, ever-so-brief teaser trailer has just dropped offering us the
          first glimpse at the movie. And there is a lot to unpack: kids
          sprinting in indeterminate directions, a small child hiding in a ball
          pit, Matthew Lillard (!!) clasping his hands as William Afton (!!) We
          are here for it. And so it seems are you fine people. The dashboard is
          ablaze with #fnaf right now as the fandom goes potty with excitement:
          gifs, memes, analysis, and shitposts all in fervent excitement.
        </p>
        <p className="card-tags">
          #today #naf #today #naf #today #naf #today #naf #today #naf #today
          #naf #today #naf #today #naf{' '}
        </p>
        <div className="card-footer">
          <div
            onClick={() => setIsNoteCliked(!isNoteCliked)}
            className="footer-note"
          >
            73 not
          </div>
          <div className="footer-icons">
            <ArrowUturnRightIcon width={25} />
            <ArrowPathRoundedSquareIcon width={25} />
            <HeartIcon width={25} />
          </div>
        </div>
        {isNoteCliked && (
          <div className="note-open">
            <div className="note-open-top">
              <div className="icons">
                <ChatBubbleOvalLeftIcon width={30} /> 0
                <ArrowPathRoundedSquareIcon width={30} /> 16
                <HeartIcon width={30} /> 22
              </div>
              <span>Yorumlar ve etiketler</span>
            </div>
            <div className="note-open-main">
              <div className="note-write">
                <img
                  src="https://media.istockphoto.com/id/596780752/tr/foto%C4%9Fraf/modern-robot-and-sign-hi.jpg?s=1024x1024&w=is&k=20&c=oKjy7ahEHBxMnjpaeWC-F2B2zuaX6_o2SiiGblgIcS0="
                  alt="icon"
                />
                <input type="text" placeholder="Hoş bir şeyler söyle" />
              </div>
              <div className="note-open-user">
                <img
                  src="https://cdn1.ntv.com.tr/gorsel/4YpWfNF7KkmdTR1iqDsD_A.jpg?width=1000&mode=crop&scale=both"
                  alt="user"
                />
                <div className="infos">
                  <span className="name">ladyoswald</span>
                  <ArrowPathRoundedSquareIcon width={20} />
                  <span>todayontumblr</span>
                </div>
              </div>
              <p>$short king dominiom</p>
              <div className="note-footer">
                <span>RB'le</span>
                <span>Gönderiyi görüntüle</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
