import { BoostrapLink } from "./bootstrap/bootstrap-link.component";
import { Brands } from "./brands/brands.component";
import { Card } from "./card/card.component";
import { Footer } from "./footer/Footer.component";
import { Link } from "./link/link.component";
import { Navbar } from "./navbar/navbar.component";

Card.register("px-card", Card);
Navbar.register("px-navbar", Navbar);
Brands.register("px-brands", Brands);
BoostrapLink.register("px-bootstrap", BoostrapLink);
Footer.register("px-footer", Footer);
Link.register("px-link", Link);
