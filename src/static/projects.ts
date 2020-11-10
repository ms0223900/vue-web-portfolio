import allImages from './all-images';

export type ProjectType = 'formal' | 'side-project'
export interface SingleProjectData {
  title: string;
  introduction: string;
  link: string;
  tag?: ProjectType;
  image: {
    name: string;
    src: string;
  };
}

const projectListData: SingleProjectData[] = [
  {
    title: '台中公車動態',
    tag: 'formal',
    introduction: '簡短介紹',
    link: 'https://citybus.taichung.gov.tw/ebus',
    image: {
      name: '',
      src: allImages['ibus-tc'].src,
    },
  },
  {
    title: '高雄公車動態',
    tag: 'formal',
    introduction: '簡短介紹',
    link: 'https://ibus.tbkc.gov.tw/ibus',
    image: {
      name: '',
      src: allImages['ibus-ks'].src,
    },
  },
  {
    title: '桃園公車動態',
    tag: 'formal',
    introduction: '簡短介紹',
    link: 'https://ebus.tycg.gov.tw/ebus/',
    image: {
      name: '',
      src: allImages['ebus-ty'].src,
    },
  },
  {
    title: 'Bullet Note',
    introduction: '簡短介紹',
    link: 'https://github.com/ms0223900/bullet-note',
    image: {
      name: '',
      src: allImages['bullet-note'].src,
    },
  },
  {
    title: 'Storybook主題色插件',
    introduction: '簡短介紹',
    link: '',
    image: {
      name: '',
      src: allImages['storybook-theme-color-addon'].src,
    },
  },
  {
    title: 'React 小遊戲',
    introduction: '寶石方塊、五子棋',
    link: 'https://ms0223900.github.io/react-custom-components/storybook-static/?path=/story/custom-components--jewel-game',
    image: {
      name: '',
      src: allImages['react-games'].src,
    },
  },
  {
    title: '小雞射擊遊戲',
    introduction: '橫向彈幕遊戲(html5 canvas)',
    link: 'https://ms0223900.github.io/mini-games/dist/',
    image: {
      name: '',
      src: allImages['chick-shooting-game'].src,
    },
  },
  {
    title: 'Test Battle',
    introduction: '自己建立試卷並考試!',
    link: 'https://ms0223900.github.io/test-battle/',
    image: {
      name: '',
      src: allImages['test-battle'].src,
    },
  },
  {
    title: '大頭菜價格趨勢預測',
    introduction: '紀錄動物之森大頭菜價格',
    link: 'https://ms0223900.github.io/acnh-kabu-prediction/',
    image: {
      name: '',
      src: allImages['kabu-prediction'].src,
    },
  },
];

export default projectListData;
