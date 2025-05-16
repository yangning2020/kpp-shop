export const getHomeRedirect = (pathname: string): string => {
  if (
    pathname.startsWith('/user/') ||
    pathname === '/savepost' ||
    pathname === '/fans' ||
    pathname === '/following' ||
    pathname === '/balance' ||
    pathname === '/balancedetail' ||
    pathname.startsWith('/invoice') ||
    pathname.startsWith('/order') ||
    pathname.startsWith('/address')
  ) {
    return '/me';
  }

  if (pathname.startsWith('/post') || pathname.includes('/posts')) {
    return '/explore';
  }

  if (pathname.startsWith('/conversation')) {
    return '/message';
  }

  // 其餘預設回trade
  return '/trade';
};
