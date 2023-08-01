import { createGlobalStyle } from 'styled-components';

/**
 * @abstract fix 无法自动格式化
 * @link https://github.com/styled-components/vscode-styled-components/issues/175
 */
const styled = { createGlobalStyle };

/**
 * @link https://meyerweb.com/eric/tools/css/reset/
 * @version v5.0.1 | 20191019
 * @license License: none (public domain)
 */
// prettier-ignore
const Reset = styled.createGlobalStyle`
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
`;

export const GlobalStyle = styled.createGlobalStyle`
  /* fix 浏览器默认样式 */
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
    backface-visibility: hidden;
  }
  img {
    display: block;
    outline: none;
  }
  /* 全局样式 */
  * {
    box-sizing: border-box;
  }
  /* 隐藏横向滚动条 */
  :root::-webkit-scrollbar {
    height: 0;
    background-color: transparent;
  }
  ::selection {
    background: rgba(254, 215, 2, 0.8);
    color: #ffffff;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  /* flex */
  .row-start {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .row-center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .row-between {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .row-end {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .col-start {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .col-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .col-between {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .col-end {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

// const GlobalStyles = () => (
//   <>
//     <Reset />
//     <Common />
//     <Markdown />
//     <Highlight />
//     <Demo />
//     <Icon />
//     <IconPickSearcher />
//     <BrowserMockup />
//     <Responsive />
//     {/* <NProgress /> */}
//     <PreviewImage />
//     <InlineCard />
//     <ColorStyle />
//     <HeadingAnchor />
//     <SearchBar />
//   </>
// );

// export default GlobalStyles;
