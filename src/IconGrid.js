/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const iconSection = css`
  max-width: 1248px;
  margin: 160px auto;
  padding: 0, 24px;
`;

const headLine = css`
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    margin: 40px auto;
    text-align: center;
    max-width: 670px;
    width: 100%;
  }
`;

const iconWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

const icon = css`
  img {
    display: block;
    margin: 0 auto;
    height: 100px;
    width: 100px;
  }
`;

const iconText = css`
  h2 {
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
export default function IconGrid() {
  return (
    <section css={iconSection}>
      <div css={headLine}>
        <h2>A logo creator that gives you everything a logo designer would</h2>
      </div>
      <div css={iconWrapper}>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_image.svg"
              alt="Round orange icon showing a graphic mountin with a sun"
            />
          </div>
          <div css={iconText}>
            <h2>1. High-res logos</h2>

            <p>
              Crisp, hi-res PNG and JPG logo files for use online or offline.
            </p>
          </div>
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_pen_tool.svg"
              alt="Round blueish icon showing a graphic tip of a fountain pen"
            />
          </div>
          <div css={iconText}>
            <h2>2. Vector files</h2>

            <p>
              SVG and EPS logo files that let you scale your logo to any size.
              Perfect for printing!
            </p>
          </div>
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_shirt.svg"
              alt="Round readish icon showing a shirt"
            />
          </div>
          <div css={iconText}>
            <h2>3. Color variations</h2>

            <p>
              Get black and white, colored, and transparent background
              variations of your logo.
            </p>
          </div>
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_bc.svg"
              alt="Round greenish icon showing a graphic business card"
            />
          </div>
          <div css={iconText}>
            <h2>4. Business card designs</h2>

            <p>
              Choose from 20 professional and easy-to-customize business card
              designs.
            </p>
          </div>
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_social.svg"
              alt="Round purple icon showing a graphic thumbs up"
            />
          </div>
          <div css={iconText}>
            <h2>5. Social media templates</h2>

            <p>
              Design perfectly-sized profiles and posts for Facebook, Twitter,
              YouTube, and more.
            </p>
          </div>
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_file.svg"
              alt="Round orange icon showing a graphic file"
            />
          </div>
          <div css={iconText}>
            <h2>6. Brand infos</h2>

            <p>
              A one-page resource with your logo fonts and colors. Consistency
              for the win!
            </p>
          </div>{' '}
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_resize.svg"
              alt="Round purple icon showing a square"
            />
          </div>
          <div css={iconText}>
            <h2>7. Post-purchase changes</h2>

            <p>
              Make unlimited changes to your logo when you subscribe to Looka’s
              Brand Kit.
            </p>
          </div>{' '}
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_phone.svg"
              alt="Round bluish icon showing a graphic phone"
            />
          </div>
          <div css={iconText}>
            <h2>8. Lifetime logo support</h2>

            <p>
              Our team is here if you need help opening files, tweaking your
              designs, or getting started.
            </p>
          </div>{' '}
        </div>
        <div>
          <div css={icon}>
            <img
              src="/images/ic_phone.svg"
              alt="Round yellow icon showing the letter c"
            />
          </div>
          <div css={iconText}>
            <h2>9. Royalty-free logos</h2>

            <p>
              Use your downloaded logo files for any commercial or
              non-commercial purpose.
            </p>
          </div>{' '}
        </div>
      </div>
    </section>
  );
}
