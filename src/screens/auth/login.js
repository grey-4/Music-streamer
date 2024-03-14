import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tbqUFi1STgHWk3mSci02cAHaFj%26pid%3DApi&f=1&ipt=5fcd617cb76d4350c7f7d55e10126ee52feae16ce3561b855b8a850854a62720&ipo=images"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
