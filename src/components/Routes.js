import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// BrowserRouter 사용시에 패키징 후 빈화면만 나오는 이슈 확인하여 변경함



import Mapper from "./Mapper/Mapper.js";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";

// App.js에 있던 Aladin, LionKing, SpiderMan을
// Components/Routes.js 로 이동
export default () => (
  <Router>
    <Route exact path="/" component={Mapper} />
    <Route path="/main" component={Main} />
    <Route path="/header" component={Header} />
  </Router>
);
