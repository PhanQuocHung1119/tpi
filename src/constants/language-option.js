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

export const bestServices = [
  {
    locale: 'vi',
    title: 'Cung cấp các ngành dịch vụ tốt nhất',
    sub: [
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Provide Best Services Industries',
    sub: [
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
      {
        title: 'Lorem ipsum',
        desc: ` Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt`,
      },
    ],
  },
];

export const trustedBy = [
  {
    locale: 'vi',
    title: 'Được tin cậy bởi các công ty hàng đầu',
  },
  {
    locale: 'en-US',
    title: 'Trusted by the Top-tier Companies',
  },
];

export const teamMember = [
  {
    locale: 'vi',
    title: 'Đội ngũ của chúng tôi',
    titleMain: 'Đội ngũ của chúng tôi sẵn sàng giúp đỡ khách hàng!',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
            consequat egestas dictum posuere pellentesque fermentum.`,
    sub: [
      {
        title: 'Tên',
        desc: `Chức vụ`,
      },
      {
        title: 'Tên',
        desc: `Chức vụ`,
      },
      {
        title: 'Tên',
        desc: `Chức vụ`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Our team',
    titleMain: 'Our team member is ready to help our clients!',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
            consequat egestas dictum posuere pellentesque fermentum.`,
    sub: [
      {
        title: 'Name goes here',
        desc: `Tittle goes here`,
      },
      {
        title: 'Name goes here',
        desc: `Tittle goes here`,
      },
      {
        title: 'Name goes here',
        desc: `Tittle goes here`,
      },
    ],
  },
];

export const leaderIndustrial = [
  {
    locale: 'vi',
    title: 'Chúng tôi dẫn đầu trong thị trường công nghiệp',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet, 
    consequat egestas dictum posuere pellentesque fermentum.`,
    subDesc: [
      { desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` },
      { desc: `Metus, tristique faucibus sem sed aenean commodo velit.` },
      { desc: `Enim varius pellentesque posuere mattis.` },
    ],
    button: `Chi tiết`,
  },
  {
    locale: 'en-US',
    title: 'We are leader in industiral market',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet, 
    consequat egestas dictum posuere pellentesque fermentum.`,
    subDesc: [
      { desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` },
      { desc: `Metus, tristique faucibus sem sed aenean commodo velit.` },
      { desc: `Enim varius pellentesque posuere mattis.` },
    ],
    button: `Detail`,
  },
];

export const testimonial = [
  {
    locale: 'vi',
    title: 'Nhận xét của khách hàng',
    desc: `Khách hàng nói về các dịch vụ của chúng tôi!`,
    comments: [
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `Các bạn thực sự giỏi trong việc tập trung vào những gì khách hàng cần và yêu cầu. Các bạn có khả năng thấu hiểu khách hàng. Rất tốt`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Testimonial',
    desc: `Hear what our previous clients had to say about our services!`,
    comments: [
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Justus Menke',
        title: 'CEO Eronaman',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Britain Eriksen',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
      {
        name: 'Serhiy Hipskyy',
        title: 'CEO Universal',
        comment: `You're really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!`,
      },
    ],
  },
];

export const ourProject = [
  {
    locale: 'vi',
    title: 'Dự án của chúng tôi',
    mainTitle: 'Dự án mới nhất',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
          consequat egestas dictum posuere pellentesque fermentum.`,
  },
  {
    locale: 'en-US',
    title: 'Our project',
    mainTitle: 'Latest project',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
          consequat egestas dictum posuere pellentesque fermentum.`,
  },
];

export const news = [
  {
    locale: 'vi',
    title: 'Tin mới nhất',
    latestNews: {
      title: 'NHIỀU LƯỢT XEM',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar 
      etiam facilisi porttitor nunc malesuada`,
      readMore: 'Đọc Thêm',
    },
    subNews: [
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
      {
        title: 'MÔ TẢ',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Đọc Thêm',
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Latest news',
    latestNews: {
      title: 'BEST PRACTICES',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar 
      etiam facilisi porttitor nunc malesuada`,
      readMore: 'Read More',
    },
    subNews: [
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Read More',
      },
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      },
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Read More',
      },
      {
        title: 'CASE STUDY',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        readMore: 'Read More',
      },
    ],
  },
];

export const question = [
  {
    locale: 'vi',
    title: 'Bạn có câu hỏi nào không?',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            leo, id gravida eget gravida. Ultrices est sollicitudin risus
            molestie commodo netus nam.`,
    button: `Đọc Thêm`,
    subFAQ: [
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Câu hỏi ở đây?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Any questions? We got you.',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            leo, id gravida eget gravida. Ultrices est sollicitudin risus
            molestie commodo netus nam.`,
    button: `More FAQs`,
    subFAQ: [
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
      {
        title: `Question goes here?`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut 
        leo, id gravida eget gravida. Ultrices est sollicitudin risus 
        molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
        est sollicitudin risus molestie commodo netus nam.`,
      },
    ],
  },
];
