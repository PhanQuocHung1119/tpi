import { RoutePages } from './router';
export const headerMenu = [
  {
    locale: 'vi',
    titles: [
      { title: 'Giới thiệu', status: '', link: RoutePages.ABOUT_US },
      {
        title: 'Lĩnh vực tiên phong',
        sub: [
          {
            title: 'Chiếu xạ',
            status: 'sub',
            link: RoutePages.FOOD_IRRADIATION,
          },
          {
            title: 'Kho lạnh lưu trữ',
            status: 'sub',
            link: RoutePages.COLD_STORAGE,
          },
        ],
        status: 'wrapper',
        link: '',
      },

      { title: 'Mục tiêu phát triển', status: '', link: RoutePages.GOALS },
      { title: 'Khách hàng', status: '', link: RoutePages.CUSTOMER },
      { title: 'Hỗ trợ', status: '', link: RoutePages.SUPPORT },
      { title: 'Q&A', status: '', link: RoutePages.QUESTION_AND_ANSWER },
    ],
  },
  {
    locale: 'en-US',
    titles: [
      { title: 'About Us', status: '', link: RoutePages.ABOUT_US },
      {
        title: 'Pioneering Field',
        sub: [
          {
            title: 'Irradiation',
            status: 'sub',
            link: RoutePages.FOOD_IRRADIATION,
          },
          {
            title: 'Cold Storage',
            status: 'sub',
            link: RoutePages.COLD_STORAGE,
          },
        ],
        status: 'wrapper',
        link: '',
      },

      { title: 'Goals', status: '', link: RoutePages.GOALS },
      { title: 'Customer', status: '', link: RoutePages.CUSTOMER },
      { title: 'Support', status: '', link: RoutePages.SUPPORT },
      { title: 'Q&A', status: '', link: RoutePages.QUESTION_AND_ANSWER },
    ],
  },
];
export const introduce = [
  {
    locale: 'vi',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem etiam
            luctus amet ultrices sapien id gravida iaculis mattis.`,
    button: `Chi tiết`,
  },
  {
    locale: 'en-US',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem etiam
            luctus amet ultrices sapien id gravida iaculis mattis.`,
    button: `Detail`,
  },
];
