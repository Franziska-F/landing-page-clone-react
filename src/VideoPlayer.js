/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const playBtn = css`
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  height: 88px;
  justify-content: center;
  left: 50%;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s ease-in-out;
  width: 88px;
  z-index: 4;
  cursor: pointer;
`;

const mainImage = css`
  position: relative;

  img {
    max-width: 1200px;
    max-height: 675px;
    display: block;
    margin: 0 auto;
    position: relative;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function VideoPlayer() {
  return (
    <div>
      <section>
        <h2>How to use Looka's logo generator</h2>

        <div css={mainImage}>
          <div css={playBtn}>
            <img src="images/ic_play.svg" alt="play button for video" />
          </div>
          <img
            src="/images/looka_explainer_image_compressed.jpg"
            alt="picure of an open netbook, watercolors and pencils on a table"
          />
        </div>

        <div>
          <iframe
            data-videoid="TfzBl6of-jo"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/TfzBl6of-jo?autoplay=1&amp;modestbranding=1&amp;color=white&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Flooka.com&amp;widgetid=1"
            id="widget2"
            sandbox="allow-scripts"
          />
        </div>
      </section>
    </div>
  );
}
