/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sectionGrid = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  margin-top: 110px;
  max-width: 1248px;
`;

const imgContainer = css`
  grid-column-start: 1;
  grid-column-end: span 6;
  img {
    max-width: 100%;
    height: auto;
  }
  padding: 30px;
`;
const imgContainerRight = css`
  grid-column-start: 7;
  grid-column-end: span 12;
  img {
    max-width: 100%;
    height: auto;
  }
  padding: 30px;
`;

const textContainer = css`
  grid-column-start: 7;
  grid-column-end: span 12;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    margin-bottom: 16px;
  }
  p {
    color: #676e8b;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 24px;
  }
  span {
    color: #5340ff;
  }
`;

const textContainerLeft = css`
  grid-column-start: 1;
  grid-column-end: span 6;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    margin-bottom: 16px;
  }
  p {
    color: #676e8b;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 24px;
  }
  span {
    color: #5340ff;
  }
`;

export default function Sections() {
  return (
    <div>
      <section>
        <div css={sectionGrid}>
          <div css={imgContainer}>
            <img
              src="/images/surge-select.png"
              alt="four rectangular shaped logos with the name Surge in the middle"
            />
          </div>
          <div css={textContainer}>
            <h2>
              <span>01.</span>Our logo maker is easy
            </h2>
            <p>
              Start by entering your company name and industry, then select the
              perfect logo styles, colors, and symbols that you like the best.
              Looka Logo Maker will use these as inspiration and start to
              generate custom logo designs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div css={sectionGrid}>
          <div css={textContainerLeft}>
            <h2>
              <span>02.</span>Our logo maker is fun
            </h2>
            <p>
              Finalize your colors, fonts, and layouts in our easy-to-use logo
              editor to make sure you get exactly what you want. Undo any edits
              you make and then click Save when you’ve created your perfect logo
              design.
            </p>
          </div>
          <div css={imgContainerRight}>
            <img
              src="/images/surge-color-still.png"
              alt="big purple rectangular shaped logo with six small icons and four colorful cirlces next to it"
            />
          </div>
        </div>
      </section>

      <section>
        <div css={sectionGrid}>
          <div css={imgContainer}>
            <img
              src="/images/surge-folder-still.png"
              alt="four rectangular shaped logos with the name Surge in the middle"
            />
          </div>
          <div css={textContainer}>
            <h2>
              <span>03.</span> Our logo maker delivers
            </h2>
            <p>
              Looka’s online logo maker delivers the goods, including vector
              logo files and color variations. Your Brand Kit includes
              everything that a logo designer would deliver, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
