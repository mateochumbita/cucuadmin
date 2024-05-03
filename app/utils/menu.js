import { check, home, coffee, xIcon } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Todo",
    icon: home,
    link: "/",
  },
  
  {
    id: 3,
    title: "Desocupadas",
    icon: xIcon,
    link: "/completed",
  },
  {
    id: 4,
    title: "Ocupadas",
    icon: check,
    link: "/incomplete",
  },
];

export default menu;
