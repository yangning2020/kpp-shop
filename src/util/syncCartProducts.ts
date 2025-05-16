import { useCartStore } from '@/store/cart';
import { useProductStore } from '@/store/product';
import { message } from 'antd';

// 基本和cartshop的handleCheckout一樣 但沒拉取商品因為shop已經有
export async function syncCartProducts(sellerId: number): Promise<void> {
  const { cart, updateSellerCart } = useCartStore.getState();
  const { shopProducts } = useProductStore.getState();

  if (!shopProducts) {
    message.error('商品資訊異常，請重新進入商店');
    return;
  }

  const currentSellerCart = cart[sellerId] || [];
  const productMap = new Map(shopProducts.products.map((p) => [p.id, p]));

  const changedProductNames: string[] = [];

  const updatedSellerCart = currentSellerCart.map((item) => {
    const latest = productMap.get(item.product.id);

    if (latest) {
      const newQuantity = Math.min(item.quantity, latest.stock);

      if (
        newQuantity < item.quantity ||
        latest.price !== item.product.price ||
        latest.condition !== item.product.condition
      ) {
        changedProductNames.push(item.product.name);
      }

      return {
        ...item,
        quantity: newQuantity,
        product: {
          ...item.product,
          price: latest.price,
          stock: latest.stock,
          condition: latest.condition,
        },
      };
    } else {
      changedProductNames.push(item.product.name);
      return {
        ...item,
        quantity: 0,
        product: {
          ...item.product,
          stock: 0,
        },
      };
    }
  });

  updateSellerCart(sellerId, updatedSellerCart);

  if (changedProductNames.length > 0) {
    message.info(
      `${changedProductNames.join('、')} 商品資訊有變動，購物車已更新`
    );
  } else {
    message.success('商品資訊同步完成');
  }
}
