import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Menu, { MenuItem } from 'Base/Layout/Menu';

const menuItems: MenuItem[] = [
  {
    linkTo: '/',
    label: 'Home',
    key: 'link-to-home',
  },
  {
    linkTo: '/search',
    label: 'Search',
    key: 'link-to-search',
  },
];

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Menu menuItems={menuItems} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
