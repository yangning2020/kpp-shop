import { CardDetailRedirectUrlParam, PackRedirectUrlParam } from '@/types/Url';

export const buildCardRedirectUrl = (param: CardDetailRedirectUrlParam) => {
  const { game, uniqueKey, rare, packId, packCardId } = param;
  const searchParams = new URLSearchParams();

  if (uniqueKey) searchParams.set('cardkey', uniqueKey);
  if (rare) searchParams.set('rare', rare);
  if (packId) searchParams.set('pack', packId);
  if (packCardId) searchParams.set('packcard', packCardId);

  return `/cardredirect/${game}?${searchParams.toString()}`;
};

export const buildPackRedirectUrl = (param: PackRedirectUrlParam) => {
  const { game, packid, packname, publishdate, category } = param;
  const searchParams = new URLSearchParams();

  if (packid) searchParams.set('packid', packid);
  if (packname) searchParams.set('packname', packname);
  if (publishdate) searchParams.set('publishdate', publishdate);
  if (category) searchParams.set('category', category);

  return `/pack/${game}/${encodeURIComponent(
    packid
  )}?${searchParams.toString()}`;
};
