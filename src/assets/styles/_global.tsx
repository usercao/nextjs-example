import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

// fix 无法自动格式化 https://github.com/styled-components/vscode-styled-components/issues/175
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
