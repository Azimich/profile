import { INavbar } from "./Navbar";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";


export const INavData: INavbar[] = [
  {
    id: 1,
    name: "sun",
    img: sun,
  },
  {
    id: 2,
    name: "moon",
    img: moon,
  },
  {
    id: 3,
    title: "Home",
    link: "/",
  },
  {
    id: 4,
    title: "Projects",
    link: "/",
  },
  {
    id: 5,
    title: "Contacts",
    link: "/",
  }
]