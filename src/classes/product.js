import { NativeModules, Platform } from "react-native";
const { OS } = Platform;

// ios specific
const { InAppUtils } = NativeModules;
const { loadProducts, purchaseProduct } = InAppUtils;

// android specific
import InAppBilling from "react-native-billing";

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

  purchaseIOS(productId) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.requestItems(productId);
        resolve(await this.requestPurchase(productId));
      } catch (err) {
        reject(err);
      }
    });
  }

  purchaseAndroid(productId) {
    return new Promise(async (resolve, reject) => {
      await InAppBilling.close();
      try {
        await InAppBilling.open();
        if (!await InAppBilling.isPurchased(productId)) {
          const details = await InAppBilling.purchase(productId);
          console.log("You purchased: ", details);
        }
        const transactionStatus = await InAppBilling.getPurchaseTransactionDetails(
          productId
        );
        console.log("Transaction Status", transactionStatus);
        const productDetails = await InAppBilling.getProductDetails(productId);
        console.log(productDetails);
      } catch (err) {
        reject(err);
      } finally {
        await InAppBilling.consumePurchase(productId);
        await InAppBilling.close();
        resolve();
      }
    });
  }

  purchase(productIds) {
    const productId = productIds[OS];
    return OS === "ios"
      ? this.purchaseIOS(productId)
      : this.purchaseAndroid(productId);
  }
}

export { Product };
