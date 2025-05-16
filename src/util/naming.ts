export function joinCardPackWithCardId(packId: string, cardId: string): string {
  return packId.split('(')[0] + '-' + cardId;
}

export function formatDate(publishDate: string): string {
  return `${publishDate.slice(0, 4)}-${publishDate.slice(
    4,
    6
  )}-${publishDate.slice(6)}`;
}
