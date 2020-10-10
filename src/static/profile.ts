import allImages from './all-images';

export interface ProfileData {
  name: string;
  nickName: string;
  profileImgSrc: string;
  email: string;
}

const profile: ProfileData = {
  name: '卓昌憲',
  nickName: 'Penguin Cho',
  profileImgSrc: allImages.profile.src,
  email: 'ms0223900@hotmail.com.tw',
};

export default profile;
