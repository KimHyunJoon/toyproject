import { createGlobalStyle, ThemeProvider } from "styled-components";
import MyInformation from "./main/MyInformation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Theme } from "./theme";
import Account from "./secondComponent/Account";
import DetailPoint from "./secondComponent/DetailPoint";
import UsePoint from "./secondComponent/UsePoint";
import Announce from "./secondComponent/Announce";
import Donate from "./secondComponent/Donate";
import Event from "./secondComponent/Event";
import Invite from "./secondComponent/Invite";
import Notice from "./secondComponent/Notice";
import Question from "./secondComponent/Question";
import Term from "./secondComponent/Term";
import Version from "./secondComponent/Version";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-weight: 300;
  font-family: 'Source Sans Pro',sans-serif;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  text-decoration: none;
}
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/announce">
            <Announce />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/invite">
            <Invite />
          </Route>
          <Route path="/notice">
            <Notice />
          </Route>
          <Route path="/question">
            <Question />
          </Route>
          <Route path="/term">
            <Term />
          </Route>
          <Route path="/Version">
            <Version />
          </Route>
          <Route path="/detailPoint">
            <DetailPoint />
          </Route>
          <Route path="/usePoint">
            <UsePoint />
          </Route>
          <Route path="/">
            <MyInformation />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
