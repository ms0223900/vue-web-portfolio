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
    title: 'Medium',
    intro: '紀錄技術文章、讀書心得和各種分享',
    link: 'https://medium.com/@ms0223900',
    iconSrc: allImages.medium.src,
  },
  {
    title: 'HackMD',
    link: 'https://hackmd.io/@PenguinCho',
    intro: '分享一些比較雜項、隨筆的紀錄',
    iconSrc: allImages['hack-md'].src,
  },
  {
    title: 'Issuu設計作品集',
    link: 'https://issuu.com/227956/docs/__________2016_a4_straight',
    intro: '還在做設計時的作品集',
    iconSrc: allImages.issuu.src,
  },
];

export default otherLinks;
