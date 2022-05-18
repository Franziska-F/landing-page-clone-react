/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const logoSection = css`
  max-width: 1248px;
  margin: 160px auto;
  padding: 0, 24px;

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    margin-bottom: 60px;
  }
`;

const gridWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

const container = css`
  img {
    display: block;
    margin: 0 auto;
  }
`;

const imgContainer = css`
  img {
    max-width: 350px;
    max-height: 350px;
    border-radius: 8px;
  }
`;
const textContainer = css`
  h3 {
    text-align: center;
    font-size: 24px;
    margin: 16px 0 8px 0;
  }
  p {
    color: #676e8b;
    font-size: 16px;
    text-align: center;
  }
`;

export default function LogoGrid() {
  return (
    <div css={logoSection}>
      <section>
        <h2>Looka these beautiful logos :)</h2>
        <div css={gridWrapper}>
          <div css={container}>
            <div css={imgContainer}>
              <img src="/images/empira.jpg" alt="" />
            </div>

            <div css={textContainer}>
              <h3>Empira</h3>
              <p>Dublin, Ireland</p>
            </div>
          </div>
          <div css={container}>
            <div css={imgContainer}>
              <img src="/images/shadow_box.jpg" alt="" />
            </div>

            <div css={textContainer}>
              <h3>Shadow Box</h3>
              <p>Toronto, Canada</p>
            </div>
          </div>
          <div css={container}>
            <div css={imgContainer}>
              <img src="images/ruthless.jpg" alt="" />
            </div>

            <div css={textContainer}>
              <h3>Ruthless</h3>
              <p>London, England</p>
            </div>
          </div>
          <div css={container}>
            <div css={imgContainer}>
              <img src="images/space_box.jpg" alt="" />
            </div>

            <div css={textContainer}>
              <h3>Spacebox</h3>
              <p>Zurich, Switzerland</p>
            </div>
          </div>
          <div css={container}>
            <div css={imgContainer}>
              <img src="/images/strabell.jpg" alt="" />
            </div>

            <div css={textContainer}>
              <h3>Strabell</h3>
              <p>Aukland, New Zealand</p>
            </div>
          </div>
          <div css={container}>
            <div css={imgContainer}>
              <img src="/images/frime.jpg" alt="" />
            </div>

            <div css={textContainer}>
              <h3>Frime</h3>
              <p>Melbourne, Australia </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
