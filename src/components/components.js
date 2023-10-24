import { Navbar } from "./app/navbar/navbar.component";
import { BoostrapLink } from "./bootstrap/bootstrap-link.component";
import { Card } from "./card/card.component";

Card.register("px-card", Card);
BoostrapLink.register("px-bootstrap", BoostrapLink);
Navbar.register("px-navbar", Navbar);
