import { OtherLinkKeys, ProfileKeys, ProjectKeys } from './types';

export interface SingleImage {
  name: string;
  src: string;
}

type ImageKeys = ProjectKeys | OtherLinkKeys | ProfileKeys |
  'icon-email' | 'icon-facebook' | 'icon-book'

const allImages: {
  [x in ImageKeys]: SingleImage;
} = {
  'ibus-ks': {
    name: 'ibus-ks',
    src: './assets/images/project-images/ibus-ks.png',
  },
  'ibus-tc': {
    name: 'ibus-tc',
    src: './assets/images/project-images/ibus-tc.png',
  },
  'ebus-ty': {
    name: 'ebus-ty',
    src: './assets/images/project-images/ebus-ty.jpg',
  },
  'ebus-ty-app': {
    name: 'ebus-ty-app',
    src: './assets/images/project-images/ebus-ty-app.jpg',
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
    src: './assets/images/project-images/chick-shooting-game.gif',
  },
  'fb-crawl-project': {
    name: 'fb-crawl-project',
    src: './assets/images/project-images/fb-crawl-project.jpg',
  },

  medium: {
    name: 'medium',
    src: './assets/images/icons/medium-icon.png',
  },

  'git-hub': {
    name: 'git-hub',
    src: './assets/images/icons/github-logo.png',
  },
  'hack-md': {
    name: 'hack-md',
    src: './assets/images/icons/hack-md-logo.png',
  },
  issuu: {
    name: 'issuu',
    src: './assets/images/icons/issuu-logo.png',
  },

  profile: {
    name: 'profile',
    src: './assets/images/profile/profile.jpg',
  },

  'icon-email': {
    name: 'icon-email',
    src: './assets/images/icons/icon-email.svg',
  },
  'icon-facebook': {
    name: 'icon-facebook',
    src: './assets/images/icons/icon-facebook.svg',
  },
  'icon-book': {
    name: 'icon-book',
    src: './assets/images/icons/icon-book.svg',
  },
};

export default allImages;
