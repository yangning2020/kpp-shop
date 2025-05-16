export function getGameChinese(game: string): string {
  switch (game) {
    case 'ygojp':
      return '遊戲王日文';
    case 'onejp':
      return '航海王日文';
    case 'pkmjp':
      return '寶可夢日文';
    case 'pkmtw':
      return '寶可夢繁中';
    case 'wsjp':
      return 'WS日文';
    case 'azltw':
      return '碧藍航線繁中';
    case 'holojp':
      return 'hololive日文';
    default:
      return '未知狀態';
  }
}

export const postGames = [
  '遊戲王',
  '寶可夢',
  '航海王',
  'WS',
  'hololive',
  '碧藍航線',
  '綜合',
];

export const postGamesOptions = [
  { name: '全部遊戲', label: '' },
  { name: '遊戲王', label: '遊戲王' },
  { name: '寶可夢', label: '寶可夢' },
  { name: '航海王', label: '航海王' },
  { name: 'WS', label: 'WS' },
  { name: 'hololive', label: 'hololive' },
  { name: '碧藍航線', label: '碧藍航線' },
  { name: '綜合', label: '綜合' },
];

export const gameOptions = [
  // { key: 'ygojp', displayGameName: '遊戲王', displayLang: '日文' },
  { key: 'pkmjp', displayGameName: '寶可夢', displayLang: '日文' },
  { key: 'pkmtw', displayGameName: '寶可夢', displayLang: '繁中' },
  { key: 'onejp', displayGameName: '航海王', displayLang: '日文' },
  { key: 'wsjp', displayGameName: 'WS', displayLang: '日文' },
  { key: 'azltw', displayGameName: '碧藍航線', displayLang: '繁中' },
  { key: 'holojp', displayGameName: 'hololive', displayLang: '日文' },
];

export const gameMap = Object.fromEntries(gameOptions.map((g) => [g.key, g]));
