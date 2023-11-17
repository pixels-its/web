import { BoostrapLink } from "./bootstrap/bootstrap-link.component.js";
import { Brands } from "./brands/brands.component.js";
import { Card } from "./card/card.component.js";
import { Footer } from "./footer/Footer.component.js";
import { Link } from "./link/link.component.js";
import { Navbar } from "./navbar/navbar.component.js";

Card.register("px-card", Card);
Navbar.register("px-navbar", Navbar);
Brands.register("px-brands", Brands);
BoostrapLink.register("px-bootstrap", BoostrapLink);
Footer.register("px-footer", Footer);
Link.register("px-link", Link);
