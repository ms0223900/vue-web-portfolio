import allImages from './all-images';

export interface SingleOtherLink {
  title: string;
  intro?: string;
  link: string;
  iconSrc: string;
}

const otherLinks: SingleOtherLink[] = [
  {
    title: 'GitHub',
    intro: 'Side Project和練習',
    link: 'https://github.com/ms0223900?tab=repositories',
    iconSrc: allImages['git-hub'].src,
  },
  {
    title: 'Medium文章',
    intro: '紀錄技術文章、讀書心得和各種分享',
    link: 'https://medium.com/@ms0223900',
    iconSrc: allImages.medium.src,
  },
  {
    title: 'HackMD文章',
    link: 'https://hackmd.io/@PenguinCho',
    intro: '分享一些比較雜項、隨筆的紀錄',
    iconSrc: allImages['hack-md'].src,
  },
];

export default otherLinks;
