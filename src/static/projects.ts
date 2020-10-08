export interface SingleProjectData {
  title: string;
  introduction: string;
  image: {
    name: string;
    src: string;
  };
}

const projectListData: SingleProjectData[] = [
  {
    title: '台中公車動態',
    introduction: '簡短介紹',
    image: {
      name: '',
      src: './assets/images/project-images/ibus-tc.png',
    },
  },
  {
    title: '高雄公車動態',
    introduction: '簡短介紹',
    image: {
      name: '',
      src: './assets/images/project-images/ibus-ks.png',
    },
  },
];

export default projectListData;
