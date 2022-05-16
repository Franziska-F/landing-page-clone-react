import './App.css';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navBar = css`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 20px 0 rgb(11 7 110 / 4%);
  padding: 0 32px;
  margin: 8px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    color: #090b17;
    gap: 16px;
  }
`;
const navItems = css``;

const navLogo = css``;

const navLogin = css`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    color: white;
    background-color: #5548f6;
    height: 64px;
    border-radius: 8px;
    border: none;
    padding: 0 16px;
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
  max-width: 424px;
  border-radius: 8px;
  border: none;
  padding: 16px 24px;
  margin-right: 8px;
`;
function App() {
  return (
    <main>
      <nav css={navBar}>
        <div css={navLogo}>LOGO</div>
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
      <main>
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
              type="text"
              css={headerInput}
            />
            <button css={headerBtn}>Let's make a logo</button>
          </form>
        </header>
        <section></section>
      </main>
    </main>
  );
}

export default App;
