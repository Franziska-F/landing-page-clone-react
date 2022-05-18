/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navBar = css`
  height: 70px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 20px 0 rgb(11 7 110 / 4%);
  padding: 0 32px;
  margin: 8px;
  text-decoration: none;
  position: fixed;
  top: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    color: #090b17;
    gap: 16px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-size: 14px;
    font-weight: 600;
  }
`;
const navItems = css``;

const navLogo = css`
  a {
    text-decoration: none;
  }
  img {
    width: 134px;
    height: 20px;
  }
`;

const navLogin = css`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    color: white;
    background-color: #5548f6;

    border-radius: 4px;
    border: none;
    padding: 0 16px;
    height: 48px;
    line-height: 18px;
    padding: 15px 24px;
  }
`;
const headerStyles = css`
  background-color: white;
  max-width: 1248px;
  text-align: center;
  margin: 0 auto;
`;

const headerTitel = css`
  font-weight: 700;
  margin: 0 auto;
  font-size: 48px;
`;

const headerPara = css`
  font-weight: 400;
  margin: 32px auto;
  color: #676e8b;
  max-width: 876px;
  line-height: 32px;
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

const main = css`
  margin-top: 80px;
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

export default function AppNavHeader() {
  return (
    <div>
      <nav css={navBar}>
        <div css={navLogo}>
          <a href="/">
            <img
              src="/images/looka-logo.svg"
              alt="The name looka in black bold fonts"
            />
          </a>
        </div>
        <div css={navItems}>
          <ul>
            <li>
              <a href="/">Logo Maker</a>
            </li>

            <li>
              <a href="/">Brand Kit</a>
            </li>

            <li>
              <a href="/">How it Works</a>
            </li>

            <li>
              <a href="/">Reviews</a>
            </li>

            <li>
              <a href="/">Logo Ideas</a>
            </li>

            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div css={navLogin}>
          <a href="/">Log in</a>
          <button>Sign up</button>
        </div>
      </nav>
      <main css={main}>
        <header css={headerStyles}>
          <h1 css={headerTitel}>Make a logo with Looka</h1>
          <p css={headerPara}>
            Looka Logo Maker combines your logo design preferences with
            Artificial Intelligence to help you create a custom logo you'll
            love. All it takes is a few clicks and five minutes.
          </p>
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
        </header>
      </main>
    </div>
  );
}
