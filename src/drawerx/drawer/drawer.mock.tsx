import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ApiIcon from "@mui/icons-material/Api";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
import BrushIcon from "@mui/icons-material/Brush";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import ChairIcon from "@mui/icons-material/Chair";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import DangerousIcon from "@mui/icons-material/Dangerous";
import DiamondIcon from "@mui/icons-material/Diamond";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import type {
  DrawerNavigation,
  DrawerNavigationCollapsable,
  DrawerNavigationItem,
  DrawerNavigationLink,
} from "../drawer.types";

export const mockLinkDrawerNavigationItem: DrawerNavigationLink = {
  id: "item1.1",
  kind: "link",
  text: "Item 1.1",
  icon: <DiamondIcon />,
  href: "/items/1-1",
};

export const mockLinkNoIconDrawerNavigationItem: DrawerNavigationLink = {
  id: "item1.1",
  kind: "link",
  text: "Item 1.1",
  href: "/items/1-1",
};

export const mockLinkBulletDrawerNavigationItem: DrawerNavigationItem = {
  id: "item1.3",
  kind: "link",
  text: "Item 1.3",
  href: "/items/1-3",
  icon: <BrushIcon />,
  bullet: {
    variant: "secondary",
  },
};

export const mockLinkLabelDrawerNavigationItem: DrawerNavigationItem = {
  id: "item2.1",
  kind: "link",
  text: "Item 2.1",
  href: "/items/2-1",
  icon: <FlightTakeoffIcon />,
  label: {
    text: "10",
    variant: "error",
  },
};

export const mockLinkAvatarDrawerNavigationItem: DrawerNavigationItem = {
  id: "item.a.1",
  kind: "link",
  text: "Avatar 1",
  href: "/items/a-1",
  avatar: {
    src: "https://c.pxhere.com/images/f6/e0/022ab77c391925931fe227c97ab4-1447675.jpg!d",
    alt: "Avatar 1",
  },
};

export const mockListDrawerNavigationItems: DrawerNavigationItem[] = [
  mockLinkDrawerNavigationItem,
  {
    id: "item1.2",
    kind: "link",
    text: "Item 1.2",
    href: "/items/1-2",
    icon: <AccessAlarmIcon />,
  },
  mockLinkBulletDrawerNavigationItem,
  {
    id: "item1.4",
    kind: "link",
    text: "Item 1.4",
    href: "/items/1-4",
    icon: <AccountBoxIcon />,
    bullet: {
      variant: "error",
    },
  },
];

export const mockMenuDrawerNavigationItem: DrawerNavigationCollapsable = {
  id: "item2.3.4.2",
  kind: "collapsable",
  text: "Item 2.3.4.2",
  icon: <ConnectingAirportsIcon />,
  items: [
    {
      id: "item2.3.4.2.1",
      kind: "link",
      text: "Item 2.3.4.2.1",
      href: "/items/2-3-4-2.1",
      icon: <DangerousIcon />,
    },
    {
      id: "item2.3.4.2.2",
      kind: "link",
      text: "Item 2.3.4.2.2",
      href: "/items/2-3-4-2.2",
      icon: <SpellcheckIcon />,
    },
  ],
};

export const mockMenuInsideMenuDrawerNavigationItem: DrawerNavigationItem = {
  id: "item2.3.4",
  kind: "collapsable",
  text: "Item 2.3.4",
  icon: <AccountTreeIcon />,
  items: [
    {
      id: "item2.3.4.1",
      kind: "link",
      text: "Item 2.3.4.1",
      href: "/items/2-3-4-1",
      icon: <CallMissedIcon />,
    },
    mockMenuDrawerNavigationItem,
  ],
};

export const mockListDrawerNavigationItems2: DrawerNavigationItem[] = [
  mockLinkLabelDrawerNavigationItem,
  {
    id: "item2.2",
    kind: "link",
    text: "Item 2.2",
    href: "/items/2-2",
    icon: <FlightLandIcon />,
    label: {
      text: "new",
      variant: "info",
    },
  },
  {
    id: "item2.3",
    kind: "collapsable",
    text: "Item 2.3",
    icon: <ChairIcon />,
    items: [
      {
        id: "item2.3.1",
        kind: "link",
        text: "Item 2.3.1",
        href: "/items/2-3-1",
        icon: <ApiIcon />,
      },
      {
        id: "item2.3.2",
        kind: "link",
        text: "Item 2.3.2",
        href: "/items/2-3-2",
        icon: <MenuBookIcon />,
      },
      {
        id: "item2.3.3",
        kind: "link",
        text: "Item 2.3.3",
        href: "/items/2-3-3",
        icon: <AutoFixOffIcon />,
      },
      mockMenuInsideMenuDrawerNavigationItem,
    ],
  },
];

export const mockDrawerNavigation: DrawerNavigation = [
  ...mockListDrawerNavigationItems,
  { kind: "header", id: "header2", text: "Section 2" },
  ...mockListDrawerNavigationItems2,
  { kind: "header", id: "header-avatar", text: "Section Avatar" },
  mockLinkAvatarDrawerNavigationItem,
  {
    id: "item.a.2",
    kind: "link",
    text: "Avatar 2",
    href: "/items/a-2",
    avatar: {
      src: "https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u-15354603894rE.jpg",
      alt: "Avatar 2",
    },
  },
];
