import { NativeModules, Platform } from "react-native";
const { OS } = Platform;

// ios specific
const { InAppUtils } = NativeModules;
const { loadProducts, purchaseProduct } = InAppUtils;

class Product {
  // read only
  requestItems(product) {
    return new Promise((resolve, reject) => {
      loadProducts([], (err, res) => {
        (err ? () => reject(err) : () => resolve(res))();
      });
    });
  }

  // read only
  requestPurchase(product) {
    return new Promise((resolve, reject) => {
      purchaseProduct(product, (err, res) => {
        (err ? () => reject(err) : () => resolve(res))();
      });
    });
  }

  purchase(productIds) {
    const productId = productIds[OS];
    return new Promise(async (resolve, reject) => {
      try {
        await this.requestItems(productId);
        resolve(await this.requestPurchase(productId));
      } catch (err) {
        reject(err);
      }
    });
  }
}

export { Product };
