const imageServiceUrl = import.meta.env.VITE_IMAGE_SERVICE_URL;

export function getAvatarUrl(userId: number): string {
  // 後續有預設頭貼替換避免登出報錯
  if (!userId) return "";
  const baseUrl =
    imageServiceUrl + "image/user/avatar/" + userId.toString() + ".jpg";

  {
    const dailyToken = Math.floor(Date.now() / 86400000);
    return baseUrl + "?v=" + dailyToken;
  }
}

export function getEventUrl(imageStr: string): string {
  return imageServiceUrl + imageStr;
}

export function getPackUrl(packId: string, game: string): string {
  return imageServiceUrl + `image/pack/${game}/${packId}.png`;
}

export function getPackDefaultUrl(): string {
  return imageServiceUrl + `image/default/packdefault.png`;
}

export function getOrderItemImage(orderImageStr: string): string {
  return imageServiceUrl + orderImageStr;
}

export function getCardNormalUrl(cardGlobalKey: string, game: string): string {
  return imageServiceUrl + `image/card/${game}/${cardGlobalKey}.jpg`;
}

export function getCardRareUrl(
  cardGlobalKey: string,
  game: string,
  packId: string,
  packCardId: string,
  rare: string
): string {
  return (
    imageServiceUrl +
    `image/card/${game}/${cardGlobalKey}/${packId}/${packCardId}/${rare}.jpg`
  );
}

export function getImageById(id: string): string {
  return id ? imageServiceUrl + "image/user/upload/" + id + ".jpg" : "";
}

export function getUserUpload(userUploadedItemName: string): string {
  return imageServiceUrl + "image/user/upload/" + userUploadedItemName;
}

export function getStickerUrl(strickerUrl: string): string {
  return imageServiceUrl + strickerUrl;
}
export function getStickerName(strickerUrl: string): string {
  const name = strickerUrl
    .split("/")
    .pop()
    ?.replace(/\.png$/, "");
  if (!name) {
    return "";
  } else {
    return name;
  }
}
