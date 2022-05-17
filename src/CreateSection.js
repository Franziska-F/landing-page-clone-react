/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapper = css`
  background-color: white;
  max-width: 1248px;
  text-align: center;
  margin: 0 auto;
  background-color: #f4f6f8;
`;

const headerTitel = css`
  font-weight: 700;
  margin: 0 auto;
  font-size: 48px;
`;

const headerForm = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  max-width: 876px;
`;

const headerBtn = css`
  background-color: #5548f6;
  color: white;
  height: 64px;
  width: 180px;

  cursor: pointer;
  border-radius: 8px;
  font-weight: 300;
  padding: 21px 24px;
  transition: all 0.2s ease-in-out;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  border: none;
`;

const headerInput = css`
  height: 64px;
  background-color: #f4f6f8;
  width: 440px;

  border-radius: 8px;
  border: none;
  padding: 16px 24px;
  margin-right: 8px;
`;
const headerTrustpilot = css`
  img {
    width: 400px;
  }
`;

export default function CreateSection() {
  return (
    <div css={wrapper}>
      <section>
        <h1 css={headerTitel}>It's fun to make a logo with Looka</h1>

        <form css={headerForm}>
          <label htmlFor="company-name"> </label>
          <input
            placeholder="Enter your company name"
            id="company-name"
            css={headerInput}
          />
          <button css={headerBtn}>Let's make a logo</button>
        </form>
        <div css={headerTrustpilot}>
          <a href="/">
            <img src="/images/trustpilot.svg" alt="Rating on Trustpilot" />
          </a>
        </div>
      </section>
    </div>
  );
}
