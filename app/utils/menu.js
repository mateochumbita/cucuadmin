import { check, home, coffee, xIcon } from "./Icons";

const menu = [
  {
    id: 1,
    title: "Todo",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Con desayuno",
    icon: coffee,
    link: "/important",
  },
  {
    id: 3,
    title: "Con CheckOut",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Sin CheckOut",
    icon: xIcon,
    link: "/incomplete",
  },
];

export default menu;
