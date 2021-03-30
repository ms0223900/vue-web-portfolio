import allImages from './all-images';

export type ProjectType = 'formal' | 'side-project'
export interface SingleProjectData {
  title: string;
  introduction: string;
  link: string;
  tag?: ProjectType;
  isShow?: boolean;
  image: {
    name: string;
    src: string;
  };
}

const projectListData: SingleProjectData[] = [
  {
    title: '台中公車動態',
    tag: 'formal',
    introduction: '台中公車便民網站，是第一個用React撰寫的中型專案，以此為基礎訂下了主要的公車網站架構。\n並且整理可共同的組件為Library，奠定網頁通用組件的基礎',
    link: 'https://citybus.taichung.gov.tw/ebus',
    image: {
      name: '',
      src: allImages['ibus-tc'].src,
    },
  },
  {
    title: '高雄公車動態',
    tag: 'formal',
    introduction: '高雄公車動態網站，初次嘗試了擴充後端strapi的功能，並用於觀光資訊的查詢部分。\n因為架構與台中有所不同，因此只沿用了共同組件，其他部分完全重寫，設計更加"彈性化"的組件',
    link: 'https://ibus.tbkc.gov.tw/ibus',
    image: {
      name: '',
      src: allImages['ibus-ks'].src,
    },
  },
  {
    title: '桃園公車動態',
    tag: 'formal',
    introduction: '以高雄公車網站的架構作擴充，因此寫起來快很多。\n細節與特效雖然在原始設計沒特別要求，但因為自己稍微有點龜毛，所以"擅自"做了點優化。',
    link: 'https://ebus.tycg.gov.tw/ebus/',
    image: {
      name: '',
      src: allImages['ebus-ty'].src,
    },
  },
  {
    title: 'Bullet Note',
    tag: 'side-project',
    introduction: '受子彈筆記啟發的筆記WebApp，後端使用Firebase即時資料庫',
    link: 'https://github.com/ms0223900/bullet-note',
    image: {
      name: '',
      src: allImages['bullet-note'].src,
    },
  },
  {
    title: 'Storybook主題色插件',
    tag: 'side-project',
    introduction: '用於Material-UI 的Storybook Addon',
    link: '',
    image: {
      name: '',
      src: allImages['storybook-theme-color-addon'].src,
    },
  },
  {
    title: 'React 小遊戲',
    tag: 'side-project',
    introduction: '寶石方塊、五子棋',
    link: 'https://ms0223900.github.io/react-custom-components/storybook-static/?path=/story/custom-components--jewel-game',
    image: {
      name: '',
      src: allImages['react-games'].src,
    },
  },
  {
    title: '小雞射擊遊戲',
    tag: 'side-project',
    introduction: '橫向彈幕遊戲(html5 canvas)',
    link: 'https://ms0223900.github.io/mini-games/dist/',
    image: {
      name: '',
      src: allImages['chick-shooting-game'].src,
    },
  },
  {
    title: 'Test Battle',
    tag: 'side-project',
    introduction: '自己建立試卷並考試!',
    link: 'https://ms0223900.github.io/test-battle/',
    image: {
      name: '',
      src: allImages['test-battle'].src,
    },
  },
  {
    title: '大頭菜價格趨勢預測',
    tag: 'side-project',
    introduction: '動物之森大頭菜價格的小網站，方便紀錄並預測波型',
    link: 'https://ms0223900.github.io/acnh-kabu-prediction/',
    image: {
      name: '',
      src: allImages['kabu-prediction'].src,
    },
  },
  {
    title: 'Ito Online',
    tag: 'side-project',
    introduction: '第一個前後端整合的線上桌遊',
    link: 'https://ito-online.web.app/',
    image: {
      name: '',
      src: allImages['kabu-prediction'].src,
    },
  },
];

export default projectListData;
