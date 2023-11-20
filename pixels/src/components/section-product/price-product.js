import { LocalStorageService } from "../services/local-storage.service.js";
import { Handlers } from "../models/handlers/handlers.js";

// Capturo cantidad y capturo valor del producto

// Obtener total (cant*precio) y guardar en local

function getTotalAmount() {
    //Obtenemos los valores
    const quantity = Handlers.getElement("quantity").value; //viene del input
    const productPrice = Handlers.getElement("productPrice").value; //viene del h5
    //Calculamos
    const price = quantity * productPrice;
    //Guardamos
    LocalStorageService.set("totalPrice", price);
}
//Obtenemos
getTotalAmount();
const totalPrice = LocalStorageService.get("totalPrice");
const amountText = Handlers.getElement("amountText");

//Insertamos en html
amountText.innerHTML = `${totalPrice}`;


