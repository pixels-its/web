import { products } from "../seeds/products-seeds.js";

/**
 * Trae datos de prueba,
 * @example
   const seeds = new SeedsService();
   const products = seeds.get("products");
 */
export class SeedService {
  constructor() {
    this.seeds = {
      products,
    };
  }
  get(seedName) {
    return this.seeds[seedName];
  }
}
