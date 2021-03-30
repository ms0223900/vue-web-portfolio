import allImages from './all-images';

export interface SingleInfo {
  icon: {
    name: string;
    src: string;
  };
  title: string;
  link?: string;
}

const infos: SingleInfo[] = [
  {
    icon: allImages['icon-email'],
    title: 'ms0223900@hotmail.com.tw',
    link: 'mailto:ms0223900@hotmail.com.tw',
  },
  {
    icon: allImages['icon-facebook'],
    title: 'Facebook個人專頁',
    link: 'https://www.facebook.com/profile.php?id=100000107785615',
  },
  {
    icon: allImages['icon-book'],
    title: '2020至今的書摘清單',
    link: 'https://www.notion.so/2020-09-52e41d61db0d4891b516b69e15932476',
  },
];

export default infos;
