import { Fragment, useState, MouseEvent, FunctionComponent } from 'react';
import Link from 'next/link';

import Button from '@material-ui/core/Button';
import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';

export type MenuItem = {
  linkTo: string;
  label: string;
  key: string;
};

type MenuPropsType = { menuItems: MenuItem[] };

export const Menu: FunctionComponent<MenuPropsType> = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (_: any) => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item: MenuItem) => (
          <Link href={item.linkTo} key={item.key}>
            <MuiMenuItem>{item.label}</MuiMenuItem>
          </Link>
        ))}
      </MuiMenu>
    </Fragment>
  );
};

export default Menu;
