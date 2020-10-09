import { ProjectKeys } from './types';

export interface SingleProjectImage {
  name: string;
  src: string;
}

const projectImages: {
  [x in ProjectKeys]: SingleProjectImage;
} = {
  'ibus-ks': {
    name: 'ibus-ks',
    src: './assets/images/project-images/ibus-ks.png',
  },
  'ibus-tc': {
    name: 'ibus-tc',
    src: './assets/images/project-images/ibus-tc.png',
  },
  'bullet-note': {
    name: 'bullet-note',
    src: 'https://imgur.com/SFpzvmB.gif',
  },
  'storybook-theme-color-addon': {
    name: 'storybook-theme-color-addon',
    src: 'https://imgur.com/Gs9Aad7.gif',
  },
  'test-battle': {
    name: 'test-battle',
    src: './assets/images/project-images/test-battle.png',
  },
  'react-games': {
    name: 'react-games',
    src: 'https://imgur.com/KSDhjbB.gif',
  },
  'kabu-prediction': {
    name: 'kabu-prediction',
    src: './assets/images/project-images/kabu-prediction.png',
  },
  'chick-shooting-game': {
    name: 'chick-shooting-game',
    src: 'https://im2.ezgif.com/tmp/ezgif-2-1eb790cc931a.gif',
  },
};

export default projectImages;
