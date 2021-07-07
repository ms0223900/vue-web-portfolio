export interface SingleSkillData {
  level: number;
  skillName: string;
}

const skillList = [
  {
    skillRealmName: '前端技能',
    skills: [
      {
        level: 3, // 0 ~ 4
        skillName: 'TypeScript',
      },
      {
        level: 3,
        skillName: 'React',
      },
      {
        level: 2,
        skillName: 'Vue',
      },
    ],
  },
  {
    skillRealmName: 'React相關函式庫',
    skills: [
      {
        level: 3, // 0 ~ 4
        skillName: 'react-router',
      },
      {
        level: 1,
        skillName: 'react-redux',
      },
      {
        level: 3,
        skillName: 'material-ui',
      },
      {
        level: 2,
        skillName: 'react-leaflet',
      },
      {
        level: 2,
        skillName: 'GraphQL client',
      },
      {
        level: 2,
        skillName: 'Storybook',
      },
    ],
  },
  {
    skillRealmName: '其他工具/技能',
    skills: [
      {
        level: 1, // 0 ~ 4
        skillName: 'CI(Drone)',
      },
      {
        level: 2,
        skillName: 'Docker',
      },
      {
        level: 1,
        skillName: 'Python',
      },
    ],
  },
];

export default skillList;
