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
    title: '',
    introduction: '',
    image: {
      name: '',
      src: '',
    },
  },
];

export default projectListData;
