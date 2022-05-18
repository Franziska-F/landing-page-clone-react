/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapper = css`
  margin: 0 auto;
  background-color: #5548f6;
  display: flex;
  justify-content: space-evenly;
  padding: 90px 0 80px 0;

  div {
    max-width: 500px;
  }

  h2 {
    color: white;
    font-weight: 700;
    margin: 16px auto;
    font-size: 40px;
  }
  p {
    font-weight: 400;
    margin: 0 auto;
    color: white;
    max-width: 876px;
  }
`;

const headerForm = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  max-width: 876px;
`;

const headerBtn = css`
  background-color: black;

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
  background-color: white;
  width: 440px;

  border-radius: 8px;
  border: none;
  padding: 16px 24px;
  margin-right: 8px;
`;

export default function CreateSection() {
  return (
    <div css={wrapper}>
      <div>
        <h2>Let's make a logo!</h2>
        <p>
          In the time it took you to read this, you could have designed a
          professional logo for your business. See for yourself.
        </p>
      </div>
      <div>
        <form css={headerForm}>
          <label htmlFor="company-name"> </label>
          <input
            placeholder="Enter your company name"
            id="company-name"
            css={headerInput}
          />
          <button css={headerBtn}>Get started</button>
        </form>
      </div>
    </div>
  );
}
