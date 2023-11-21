import { BoostrapLink } from "./bootstrap/bootstrap-link.component.js";
import { Brands } from "./brands/brands.component.js";
import { Card } from "./card/card.component.js";
import { Footer } from "./footer/footer.component.js";
import { Navbar } from "./navbar/navbar.component.js";
import { Forum } from "./forum/forum-component.js"

Card.register("px-card", Card);
Navbar.register("px-navbar", Navbar);
Forum.register("px-forum", Forum);
Brands.register("px-brands", Brands);
BoostrapLink.register("px-bootstrap", BoostrapLink);
Footer.register("px-footer", Footer);
