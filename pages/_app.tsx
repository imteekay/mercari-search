import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Menu, { MenuItem } from 'Base/Layout/Menu';
import '../styles/globals.css';

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
