import { NativeModules, Platform, AsyncStorage } from "react-native";
import { checkUserPurchasedSettings } from "../reducers/game.utilities";
const { OS } = Platform;
import { FlippourError } from "./error";

// AsyncStorage.removeItem("extra_2_5_seconds_per_level"); // for testing

// ios specific
const { InAppUtils } = NativeModules;

// android specific
import InAppBilling from "react-native-billing";

class Product {
  requestItemsIOS(product) {
    return new Promise((resolve, reject) => {
      InAppUtils.loadProducts([], (err, res) => {
        (err ? () => reject(err) : () => resolve(res))();
      });
    });
  }

  purchaseIOS(productId) {
    return new Promise(async (resolve, reject) => {
      InAppUtils.loadProducts([productId], (err, products) => {
        if (err) {
          reject(err);
        } else {
          InAppUtils.purchaseProduct(productId, (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          });
        }
      });
    });
  }

  purchaseAndroid(productId) {
    return new Promise(async (resolve, reject) => {
      await InAppBilling.close();
      try {
        await InAppBilling.open();
        if (await InAppBilling.isPurchased(productId)) {
          await InAppBilling.close();
          const aError = new FlippourError();
          reject(aError.createError("Product has already been purchased."));
        } else {
          const details = await InAppBilling.purchase(productId);
          await InAppBilling.getPurchaseTransactionDetails(productId);
          await InAppBilling.getProductDetails(productId);
          await InAppBilling.consumePurchase(productId);
          await InAppBilling.close();
          resolve();
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  purchaseCustomActions(type) {
    switch (type) {
      case "ADD_2_5_TO_INITIAL_GAME_TIM": {
        checkUserPurchasedSettings();
        break;
      }
      default: {
        break;
      }
    }
  }

  purchase(product) {
    const productId = product.id[OS];
    return new Promise(async (resolve, reject) => {
      try {
        const purchaseFunc = OS === "ios"
          ? this.purchaseIOS
          : this.purchaseAndroid;
        const status = await purchaseFunc(productId);
        await this.savePurchaseToStorage(product);
        this.purchaseCustomActions(product.type);
        resolve(status);
      } catch (err) {
        reject(err);
      }
    });
  }

  restore(product) {
    const productId = product.id[OS];
    return new Promise((resolve, reject) => {
      InAppUtils.restorePurchases((err, response) => {
        if (err) {
          reject(err);
        } else {
          if (response.length === 0) {
            reject("No products have been purchased.");
          }
          response.forEach(({ productIdentifier }) => {
            if (productIdentifier === productId) {
              this.savePurchaseToStorage(product)
                .then(() => {
                  this.purchaseCustomActions(product.type);
                  resolve();
                })
                .catch(reject);
            }
          });
        }
      });
    });
  }

  savePurchaseToStorage(product) {
    return AsyncStorage.setItem(product.storageKey, JSON.stringify(product));
  }

  loadProductsFromStorage(products) {
    return new Promise(async (resolve, reject) => {
      try {
        const itemsFromStorage = await Promise.all(
          products.map(({ storageKey }) => AsyncStorage.getItem(storageKey))
        );
        resolve(itemsFromStorage.map(JSON.parse));
      } catch (err) {
        reject(err);
      }
    });
  }

  alreadyPurchased({ storageKey }) {
    return new Promise(async (resolve, reject) => {
      try {
        const status = await AsyncStorage.getItem(storageKey);
        resolve(status !== null);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export { Product };
