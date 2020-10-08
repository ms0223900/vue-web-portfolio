import { routes } from '@/router';

export interface SingleNavBarLinkData {
  link: string;
  title: string;
}

const linkList: SingleNavBarLinkData[] = routes.map((r) => ({
  link: r.path,
  title: r.name as string,
}));

export default linkList;
