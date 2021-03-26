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
    icon: allImages['icon-email'],
    title: 'ms0223900@hotmail.com.tw',
    // link: 'mailto:ms0223900@hotmail.com.tw',
  },
  {
    icon: allImages['icon-email'],
    title: 'ms0223900@hotmail.com.tw',
    link: 'mailto:ms0223900@hotmail.com.tw',
  },
];

export default infos;
