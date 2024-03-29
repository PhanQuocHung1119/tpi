import { RoutePages } from './router';
import facebookButton from '@assets/icons/facebook-button.png';
import youtubeButton from '@assets/icons/youtube-button.png';
const item1_link1 = ' https://www.facebook.com/chieuxatoanphat';
const item1_link2 = ' https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA';
const item2_link1 = ' https://www.facebook.com/kholanhtoanphat';
const item2_link2 = ' https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA';

export const headerMenu = [
  {
    locale: 'vi',
    titles: [
      { title: 'Giới thiệu', status: '', link: RoutePages.ABOUT_US },
      // {
      //   title: 'Lĩnh vực tiên phong',
      //   sub: [
      //     {
      //       title: 'Chiếu xạ',
      //       status: 'sub',
      //       link: RoutePages.FOOD_IRRADIATION,
      //     },
      //     {
      //       title: 'Kho lạnh lưu trữ',
      //       status: 'sub',
      //       link: RoutePages.COLD_STORAGE,
      //     },
      //   ],
      //   status: 'wrapper',
      //   link: '',
      // },

      //{ title: 'Logistic HUB', status: '', link: RoutePages.LOGISTIC_HUB }, // new
      {
        //Binh add
        title: 'Logistic HUB',
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
          {
            title: 'Vận chuyển',
            status: 'sub',
            link: RoutePages.LOGISTIC_HUB,
          },
        ],
        status: 'wrapper',
        link: '',
      },

      { title: 'Vị trí', status: '', link: RoutePages.LOCATION }, // new
      {
        title: `Khách hàng & đối tác`,
        status: '',
        link: RoutePages.CUSTOMER_AND_PARTNER,
      }, // new
      {
        title: `Thị trường`,
        status: '',
        link: RoutePages.MARKET,
      }, // new
      {
        title: 'FAQs',
        /*sub: [
          {
            title: 'Hỗ trợ',
            status: 'sub',
            link: RoutePages.SUPPORT,
          },
          {
            title: 'Q&A',
            status: 'sub',
            link: RoutePages.QUESTION_AND_ANSWER,
          },
        ],*/
        status: '',
        link: RoutePages.QUESTION_AND_ANSWER,
      }, //new
      {
        title: `Liên hệ`,
        status: '',
        link: RoutePages.CONTACT,
      }, // new

      // { title: 'Mục tiêu phát triển', status: '', link: RoutePages.GOALS },
      // { title: 'Khách hàng', status: '', link: RoutePages.CUSTOMER },
      // { title: 'Hỗ trợ', status: '', link: RoutePages.SUPPORT },
      // { title: 'Q&A', status: '', link: RoutePages.QUESTION_AND_ANSWER },
    ],
  },
  {
    locale: 'en-US',
    titles: [
      { title: 'About Us', status: '', link: RoutePages.ABOUT_US },
      // {
      //   title: 'Pioneering Field',
      //   sub: [
      //     {
      //       title: 'Irradiation',
      //       status: 'sub',
      //       link: RoutePages.FOOD_IRRADIATION,
      //     },
      //     {
      //       title: 'Cold Storage',
      //       status: 'sub',
      //       link: RoutePages.COLD_STORAGE,
      //     },
      //   ],
      //   status: 'wrapper',
      //   link: '',
      // },

      { title: 'Logistic HUB', status: '', link: RoutePages.LOGISTIC_HUB }, //new
      { title: 'Location', status: '', link: RoutePages.LOCATION }, // new
      {
        title: 'Customer & Partner',
        status: '',
        link: RoutePages.CUSTOMER_AND_PARTNER,
      }, // new
      {
        title: `Market`,
        status: '',
        link: RoutePages.MARKET,
      }, // new
      {
        title: 'Support - Q&A',
        sub: [
          {
            title: 'Support',
            status: 'sub',
            link: RoutePages.SUPPORT,
          },
          {
            title: 'Q&A',
            status: 'sub',
            link: RoutePages.QUESTION_AND_ANSWER,
          },
        ],
        status: 'wrapper',
        link: '',
      }, //new
      {
        title: `Contact`,
        status: '',
        link: RoutePages.CONTACT,
      }, // new

      // { title: 'Goals', status: '', link: RoutePages.GOALS },
      // { title: 'Customer', status: '', link: RoutePages.CUSTOMER },
      // { title: 'Support', status: '', link: RoutePages.SUPPORT },
      // { title: 'Q&A', status: '', link: RoutePages.QUESTION_AND_ANSWER },
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
    title: 'Lĩnh vực tiên phong',
    sub: [
      {
        title: 'Chiếu Xạ',
        desc: ` TPG là một trong những đơn vị tiên phong trên thị trường hiện nay ứng dụng cả 3 công nghệ chiếu xạ: Cobalt 60, E-Beam, X-ray nhằm đẩy nhanh tiến độ xử lý hàng hóa và đảm bảo chất lượng tốt nhất cho Nông - Thuỷ sản. `,
      },
      {
        title: 'Kho Lạnh Lưu Trữ',
        desc: ` TPG xây dựng và đưa vào vận hành Kho Lạnh Toàn Phát với tổng số vị trí 12.000 pallet, tương đương với sức chứa lưu trữ tối đa lên đến 12.000 tấn. Nhiệt độ lưu trữ từ -18 độ C (+/-3 độ C), kho hạ độ: -35 độ C.`,
      },
      {
        title: 'Vận Chuyển',
        desc: ` Chúng tôi hướng đến trở thành một Trung tâm Logistic với đầy đủ chức năng: Chiếu xạ - Lưu trữ - Vận chuyển, nhằm tối ưu chi phí, tạo đòn bẩy cạnh tranh cho hoạt động xuất khẩu Nông - Thủy sản.`,
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

export const sixWord = [
  {
    locale: 'vi',
    title: '6 Giá Trị Cốt Lõi',
    sub: [
      {
        title: 'TRỌNG',
        desc: `TPG đề cao giá trị của sự tôn trọng trong mọi hoàn cảnh. Tôn trọng bản thân, đồng nghiệp, tập thể, đối tác và khách hàng, đó là kim chỉ nam cho sự phát triển bền vững và gắn kết mối quan hệ lâu dài. Hơn thế nữa, sự tự trọng cũng là một điều thiết yếu, từng cá nhân luôn biết coi trọng những phẩm chất tốt đẹp của bản thân, coi trọng danh dự, uy tín của tổ chức, hình thành nên một tập thể chính trực và luôn coi trọng lẽ phải. `,
      },
      {
        title: 'TÍN',
        desc: `TPG đặt chữ “Tín” làm giá trị chuẩn mực trong quá trình làm việc với khách hàng, đối tác. Từng mỗi dịch vụ cung cấp đều đem lại giá trị đích thực, minh bạch trong tất cả các giao dịch, chuyên nghiệp trong mọi quy trình để đảm bảo chất lượng, uy tín thương hiệu.`,
      },
      {
        title: 'TÂM',
        desc: `Với chúng tôi, hành động từ tâm là tham chiếu cho sự trường tồn của TPG. Đó là cái tâm và cái đức trong từng dịch vụ mang đến cho khách hàng, trong việc đối xử với CBCNV hay cả những hành động có ảnh hưởng đến sự phát triển của cộng đồng. Khi xuất phát từ những giá trị tốt đẹp, chúng tôi tin rằng đó là nền tảng vững chắc để vươn đến những tầm cao mới.`,
      },
      {
        title: 'TRÍ',
        desc: `TPG lấy trí làm sức mạnh cạnh tranh và nguồn năng lượng cho sự sáng tạo. Luôn khuyến khích toàn bộ CBCNV nghiên cứu, học hỏi, khai phá giá trị tiềm năng của mỗi người, từ đó ứng dụng công nghệ vào quản trị, vận hành, kỹ thuật để ngày một nâng cao các giá trị, chất lượng dịch vụ.`,
      },
      {
        title: 'PHÁT',
        desc: `TPG luôn đề cao tinh thần dám nghĩ dám làm của tập thể CBCNV trong công ty. Sự phát triển của mỗi cá nhân, không ngừng nỗ lực để vượt qua những thử thách là điều kiện thiết yếu tạo nên một tập thể vững mạnh, thành công và phát đạt.`,
      },
      {
        title: 'ÍCH',
        desc: ` TPG luôn tâm niệm lợi ích của khách hàng/đối tác/cộng đồng phải được đặt lên trên hết, chúng tôi lấy đó làm trọng tâm để phụng sự, cống hiến vì sự phát triển chung của xã hội. Ở khía cạnh khác, Ban lãnh đạo TPG luôn coi trọng lợi ích của từng thành viên đã đồng hành, gắn bó vì sự phát triển của tập thể. Khi mỗi cá nhân luôn giữ tinh thần cầu tiến, biết trau dồi nội lực và tích cực đóng góp, đó là giữ vững lợi ích của chính mình.`,
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

export const irradiationFlow = [
  {
    locale: 'vi',
    title: 'Quy trình chiếu xạ',
    sub: [
      {
        title: 'Nhập hàng',
        desc: `Khách hàng vận chuyển sản phẩm cần chiếu xạ đến nhà máy chiếu xạ Toàn Phát. Sau khi hoàn thành thông tin thủ tục, sản phẩm được đưa vào phòng chờ, chuẩn bị xử lý.`,
      },
      {
        title: 'Xử lý',
        desc: `Băng chuyền đưa sản phẩm vào phòng chiếu, đảm bảo sản phẩm được chiếu đều các mặt và đưa sản phẩm ra ngoài sau khi đã chiếu đủ liều. Toàn bộ quá trình xử lý nhanh gọn và được thực hiện tự động hóa bằng máy móc với độ chính xác gần như tuyệt đối.`,
      },
      {
        title: 'Sau xử lý',
        desc: `Ở đầu ra của dây chuyền sau khi hàng hoá được chiếu xạ xong, nhân viên của TPG sẽ xếp sản phẩm lên pallet, các pallet hàng hóa sẽ được xe nâng điện chở ra khu vực phòng chờ.`,
      },
      {
        title: 'Xuất hàng',
        desc: `Ở giai đoạn này xe nâng điện sẽ chở các pallet sản phẩm chất ra xe. Khách hàng hoàn thành thủ tục chứng từ còn lại sau đó chở hàng hoá ra về, hoặc đăng ký sử dụng dịch vụ thuê kho lạnh lưu trữ của TPG nếu có nhu cầu.`,
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
    title: 'Được tin cậy bởi các đối tác hàng đầu',
  },
  {
    locale: 'en-US',
    title: 'Trusted by the Top-tier Companies',
  },
];

export const teamMember = [
  {
    locale: 'vi',
    title: 'Đội ngũ nhân sự & Văn hóa doanh nghiệp',
    titleMain: 'Đội ngũ nhân sự',
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
    title: 'Văn hóa doanh nghiệp',
    desc: `Từ những con người có cá tính khác biệt, để kiến tạo nên một tập thể đồng lòng, gắn kết và có chung mục tiêu, chúng tôi xây dựng văn hoá doanh nghiệp dựa trên 03 tiêu chí: `,
    subDesc: [
      { desc: `Sự đa dạng hòa hợp` },
      { desc: `Phát triển không ngừng` },
      { desc: `Gắn kết và thấu hiểu` },
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

export const humanResource = [
  {
    locale: 'vi',
    title: 'Đội ngũ nhân sự ',
    desc: `Mỗi cá nhân sẽ tạo nên tập thể, từng đóng góp nhỏ là tiền đề của những thành quả lớn. Tại TPG, chúng tôi trân trọng giá trị của từng cá nhân, từ lãnh đạo, quản lý cấp cao am hiểu kiến thức chuyên môn đến những người trẻ với nguồn năng lượng tích cực và ham học hỏi. Một tập thể luôn coi trọng lợi ích chung và hướng đến sự cải tiến sẽ tạo nên một doanh nghiệp phát triển vững mạnh. Và tất cả những giá trị, kết quả tích cực đó đều được hình thành từ việc coi trọng Văn hóa doanh nghiệp.`,
    subDesc: [
      { desc: `` },
      { desc: `` },
      { desc: `` },
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
    title: 'Thư viện',
    mainTitle: 'Hình ảnh',
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
    title: 'Thị trường',
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

export const foodIrradiationSystem = [
  {
    locale: 'vi',
    title: 'Chiếu xạ',
    desc: `TPG là một trong những đơn vị tiên phong ứng dụng cả 3 công nghệ chiếu xạ`,
    subDesc: [
      { desc: `Hệ thống chiếu xạ bằng nguồn Cobalt 60 sử dụng tia gamma.`,
      },
      {
        desc: `Hệ thống máy chiếu xạ bằng chùm tia điện tử (E-Beam) sử dụng chùm electron.`,
      },
      { desc: `Hệ thống máy chiếu xạ Bremsstrahlung (X-ray) sử dụng tia X.`,
      },
    ],
    concludeDesc: `Đây là 3 công nghệ chiếu xạ tiên tiến nhất hiện nay nhằm đẩy nhanh tiến độ xử lý hàng hóa; nâng cao chất lượng dịch vụ, đáp ứng tối đa nhu cầu khách hàng; giảm thời gian chờ đợi và tiết kiệm chi phí tối ưu nhất. Đặc biệt, TPG là đơn vị tiên phong duy nhất hiện nay đã sản xuất, lắp đặt thành công phần mềm điều khiển, dây chuyền cơ khí vận hành phát triển bởi đội ngũ kỹ thuật công ty 100% người Việt Nam và được APHIS công nhận đủ điều kiện chiếu xạ trái cây tươi cho thị trường Hoa Kỳ.
        Với sự kết hợp của cả ba công nghệ, cùng việc không ngừng mở rộng nghiên cứu, TPG có thể ứng dụng đa dạng hóa vào nhiều mặt hàng chiếu xạ và tiếp tục khẳng định vị thế trên thị trường. 
        `,
  },
  {
    locale: 'en-US',
    title: 'Irradiation',
    desc: `TPI - The only factory in Vietnam that fully applies 3 irradiation technologies:`,
    subDesc: [
      { desc: `CoBalt 60 irradiation line using gamma rays.` },
      {
        desc: `An electron beam irradiator (E-eam) system uses an electron beam.`,
      },
      { desc: `The Bremsstrahlung (X-ray) irradiator system uses X-rays.` },
    ],
    concludeDesc: `Lorem ipsum`,
  },
];

export const productOfIrradiation = [
  {
    locale: 'vi',
    title: 'Các sản phẩm được chiếu xạ tại TPI:',
    subDesc: [
      { desc: 'Trái cây tươi' },
      { desc: 'Trái cây đông lạnh' },
      { desc: 'Thủy sản đông lạnh' },
      { desc: 'Thực phẩm chế biến' },
      { desc: 'Thiết bị y tế' },
      { desc: 'Đồ thủ công mỹ nghệ' },
      { desc: 'Sản phẩm bằng tre, gỗ' },
      { desc: 'Hoá mỹ phẩm' },
      { desc: 'Dược liệu, đông nam dược' },
      { desc: 'Đá trang sức' },
      { desc: 'Gia vị' },
      { desc: 'Thức ăn thú cưng' },
    ],
  },
  {
    locale: 'en-US',
    title: 'Products irradiated at TPI:',
    subDesc: [
      { desc: 'Fresh fruits' },
      { desc: 'Frozen fruits' },
      { desc: 'Frozen fish' },
      { desc: 'Processed food' },
      { desc: 'Medical equipment' },
      { desc: 'Hand-mades' },
      { desc: 'Bamboo, Wood' },
      { desc: 'Cosmetic' },
      { desc: 'Medicine' },
      { desc: 'Jewelries' },
      { desc: 'Spices' },
      { desc: 'Pet food' },
    ],
  },
];

export const subMethodIrradiation = [
  {
    locale: 'vi',
    title: 'Phương án 1:',
    sub: [
      { title: 'Bước 1', desc: 'Mô tả', number: 1, fullLine: true },
      { title: 'Bước 1', desc: 'Mô tả', number: 2, fullLine: true },
      { title: 'Bước 1', desc: 'Mô tả', number: 3, fullLine: false },
    ],
  },
  {
    locale: 'en-US',
    title: 'Option 1:',
    sub: [
      { title: 'Step 1', desc: 'Step Description', number: 1, fullLine: true },
      { title: 'Step 2', desc: 'Step Description', number: 2, fullLine: true },
      { title: 'Step 3', desc: 'Step Description', number: 3, fullLine: false },
    ],
  },
];

export const logisticsAndSocial = [
  {
    locale: 'vi',
    sub: [
      {
        title: 'Vận chuyển',
        desc: `Với định hướng trở thành một trung tâm logistics với đầy đủ chức năng: vận tải - phân phối - lưu trữ - chiếu xạ. Trong tương lai kho lạnh Toàn Phát sẽ kết hợp chặt chẽ với các doanh nghiệp vận chuyển lạnh để có thể đáp ứng tối đa nhu cầu của khách hàng tạo dựng chuỗi cung ứng khép kín hiện đại nhất.
Một kho lạnh đạt chuẩn.
Cung ứng xe tải đông lạnh riêng để vận chuyển hàng hóa.`,
      },
      {
        title: 'Phân phối',
        desc: `Hệ thống kho lạnh Toàn Phát định hướng phát triển trở thành một trung tâm phân phối logistics với đầy đủ chức năng đáp ứng hầu hết nhu cầu của khách hàng.
Nhiều dịch vụ đa dạng: vận chuyển, bốc xếp, dán nhãn, đóng gói hàng nhỏ lẻ, xử lý đơn hàng, giao nhận.
Nhập hàng an toàn, nhanh chóng, phục vụ tốt.
Có khu vực riêng để xử lý đơn hàng, áp dụng tính công nghệ cao.
Cầu nối giữa nhà cung cấp và khách hàng`,
      },
    ],
  },
  {
    locale: 'en-US',
    sub: [
      {
        title: 'Transport',
        desc: `With the orientation to become a logistics center with full functions: transport - distribution - storage - irradiation. In the future, Toan Phat cold storage will work closely with cold transport businesses to be able to meet the needs of customers to create the most modern closed supply chain.
A standard cold storage.
Provide separate refrigerated trucks to transport goods.`,
      },
      {
        title: 'Distribution',
        desc: `Toan Phat cold storage system is oriented to become a logistics distribution center with full functions to meet most of the needs of customers.
Various services: transportation, loading and unloading, labeling, packaging of small goods, order processing, delivery.
Import goods safely, quickly, good service.
There is a separate area for order processing, applying high technology.
Bridge between suppliers and customers`,
      },
    ],
  },
];

export const newsBlock = [
  {
    locale: 'vi',
    title: `Tin tức mới nhất`,
    sub: [
      {
        time: `08/02/2022`,
        title: `Doanh nhân Vương Hiếu, CEO Công ty TNHH Chiếu xạ Toàn Phát (TPI): Càng khó, càng muốn chinh phục`,
        desc: `CEO Vương Hiếu nói, trong quá trình khởi nghiệp, anh may mắn vì được người thân và các đối tác ủng hộ...`,
      },
      {
        time: `23/05/2022`,
        title: `Lễ khởi công kho lạnh Toàn Phát - kho vận`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to `,
      },
      {
        time: `08/03/2022`,
        title: `Happy Woman’s Day - NHỮNG BÔNG HOA CỦA ĐẠI GIA ĐÌNH TPI`,
        desc: `Cảm ơn "các nàng" đã luôn đồng hành của TPI trong suốt hành trình qua!`,
      },
      {
        time: `08/02/2022`,
        title: `Doanh nhân Vương Hiếu, CEO Công ty TNHH Chiếu xạ Toàn Phát (TPI): Càng khó, càng muốn chinh phục`,
        desc: `CEO Vương Hiếu nói, trong quá trình khởi nghiệp, anh may mắn vì được người thân và các đối tác ủng hộ...`,
      },
      {
        time: `08/03/2022`,
        title: `Happy Woman’s Day - NHỮNG BÔNG HOA CỦA ĐẠI GIA ĐÌNH TPI`,
        desc: `Cảm ơn "các nàng" đã luôn đồng hành của TPI trong suốt hành trình qua!`,
      },
      {
        time: `23/05/2022`,
        title: `Lễ khởi công kho lạnh Toàn Phát - kho vận`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to `,
      },
    ],
  },
  {
    locale: 'en-US',
    title: `Latest news`,
    sub: [
      {
        time: `02/08/2022`,
        title: `Entrepreneur Vuong Hieu, CEO of Toan Phat Irradiation Co., Ltd. (TPI): The harder it is, the more you want to conquer`,
        desc: `CEO Vuong Hieu said, in the process of starting a business, he was fortunate to have the support of his family and partners...`,
      },
      {
        time: `05/23/2022`,
        title: `Groundbreaking ceremony of Toan Phat cold storage - logistics`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to`,
      },
      {
        time: `03/08/2022`,
        title: `Happy Women's Day - THE FLOWERS OF THE BIGGEST FAMILY TPI`,
        desc: `Thank you "girls" for always accompanying TPI during the past journey!`,
      },
      {
        time: `02/08/2022`,
        title: `Entrepreneur Vuong Hieu, CEO of Toan Phat Irradiation Co., Ltd. (TPI): The harder it is, the more you want to conquer`,
        desc: `CEO Vuong Hieu said, in the process of starting a business, he was fortunate to have the support of his family and partners...`,
      },
      {
        time: `03/08/2022`,
        title: `Happy Women's Day - THE FLOWERS OF THE BIGGEST FAMILY TPI`,
        desc: `Thank you "girls" for always accompanying TPI during the past journey!`,
      },
      {
        time: `05/23/2022`,
        title: `Groundbreaking ceremony of Toan Phat cold storage - logistics`,
        desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to`,
      },
    ],
  },
];

export const coldStorageTopContent = [
  {
    locale: 'vi',
    title: 'Kho lạnh lưu trữ',
    desc: `Quy mô: 1.0 ha
    Tổng vị trí: 12.000 pallet
    Khả năng lưu trữ tối đa lên đến 12.000 tấn
    Thời gian hoạt động: 24/7 
    Nhiệt độ lưu trữ: -18 độ C (+/-3 độ C), có kho hạ độ: -35 độ C
    `,
    sub: [
      {
        title: `Vị trí cửa ngõ`,
        desc: `Toạ lạc tại Lô A24-2, Đường Ngang 1, Khu công nghiệp Phú An Thạnh, xã An Thạnh, huyện Bến Lức, tỉnh Long An; Kho Lạnh Toàn Phát kết nối dễ dàng, nhanh chóng đến các trục đường huyết mạch, hệ thống cảng biển, cảng hàng không và các tỉnh thành lân cận. Nhờ đó giúp các doanh nghiệp thuận tiện và tiết kiệm trong việc vận chuyển hàng hóa.`,
      },
      {
        title: `Tiết kiệm chi phí`,
        desc: `Sở hữu đồng thời kho lạnh lưu trữ và nhà máy chiếu xạ, TPG giúp các doanh nghiệp xuất khẩu hàng hóa giảm bớt chi phí vận chuyển. Đặc biệt luôn cam kết đồng hành về giá và mang đến những chính sách tối ưu nhất cho khách hàng.`,
      },
      {
        title: `Hoạt động 24/7`,
        desc: `Kho lạnh Toàn Phát hoạt động 24/7, dịch vụ tốc hành, đáp ứng tối đa nhu cầu lưu trữ và xuất hàng trong các thời điểm cần thiết của khách hàng.`,
      },
      {
        title: `Trang thiết bị hiện đại, hệ thống quản lý thông minh`,
        desc: `Với trang thiết bị hiện đại, ứng dụng công nghệ, kỹ thuật tiên tiến nhất trong điều khiển và quản lý; liên tục bảo dưỡng, nâng cấp hệ thống kho, Kho Lạnh Toàn Phát đảm bảo quá trình vận hành xử lý thông minh, chính xác, tinh gọn, đạt tiêu chuẩn.`,
      },
      {
        title: `Cam kết đảm bảo chất lượng hàng hóa`,
        desc: `Hàng hóa của doanh nghiệp khi lưu trữ và bảo quản tại Kho Lạnh Toàn Phát sẽ được đảm bảo an toàn tối đa nhờ hệ thống quản lý và quy trình vận hành một cách nghiêm ngặt.`,
      },
      {
        title: `Gói thuê kho lạnh linh hoạt`,
        desc: `Đề cao tiêu chí linh hoạt và tối ưu hóa cho doanh nghiệp, khách hàng có thể đăng ký gói thuê kho lạnh lưu trữ dựa trên nhu cầu thực tế. Có thể thuê theo thời gian ngắn hạn, trung hạn, dài hạn và tính theo trọng lượng hàng hóa thực tế hoặc tính theo số lượng vị trí pallet.`,
      },
      {
        title: `Dịch vụ hỗ trợ`,
        desc: `Kho Lạnh Toàn Phát hỗ trợ các dịch vụ đi kèm khác như: đóng gói, dán tem, thay bao bì, phân loại hàng hóa, quấn PE,… với mức phí cạnh tranh nhất.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Cold storage',
    desc: `Cold storage system with a capacity of about 10,000 tons of goods.
Toan Phat cold storage service brings many values to customers:`,
    sub: [
      {
        title: `Vị trí cửa ngõ`,
        desc: `Toạ lạc tại Lô A24-2, Đường Ngang 1, Khu công nghiệp Phú An Thạnh, xã An Thạnh, huyện Bến Lức, tỉnh Long An; Kho Lạnh Toàn Phát kết nối dễ dàng, nhanh chóng đến các trục đường huyết mạch, hệ thống cảng biển, cảng hàng không và các tỉnh thành lân cận. Nhờ đó giúp các doanh nghiệp thuận tiện và tiết kiệm trong việc vận chuyển hàng hóa.`,
      },
      {
        title: `Tiết kiệm chi phí`,
        desc: `Sở hữu đồng thời kho lạnh lưu trữ và nhà máy chiếu xạ, TPG giúp các doanh nghiệp xuất khẩu hàng hóa giảm bớt chi phí vận chuyển. Đặc biệt luôn cam kết đồng hành về giá và mang đến những chính sách tối ưu nhất cho khách hàng.`,
      },
      {
        title: `Hoạt động 24/7`,
        desc: `Kho lạnh Toàn Phát hoạt động 24/7, dịch vụ tốc hành, đáp ứng tối đa nhu cầu lưu trữ và xuất hàng trong các thời điểm cần thiết của khách hàng.`,
      },
      {
        title: `Trang thiết bị hiện đại, hệ thống quản lý thông minh`,
        desc: `Với trang thiết bị hiện đại, ứng dụng công nghệ, kỹ thuật tiên tiến nhất trong điều khiển và quản lý; liên tục bảo dưỡng, nâng cấp hệ thống kho, Kho Lạnh Toàn Phát đảm bảo quá trình vận hành xử lý thông minh, chính xác, tinh gọn, đạt tiêu chuẩn.`,
      },
      {
        title: `Cam kết đảm bảo chất lượng hàng hóa`,
        desc: `Hàng hóa của doanh nghiệp khi lưu trữ và bảo quản tại Kho Lạnh Toàn Phát sẽ được đảm bảo an toàn tối đa nhờ hệ thống quản lý và quy trình vận hành một cách nghiêm ngặt.`,
      },
      {
        title: `Gói thuê kho lạnh linh hoạt`,
        desc: `Đề cao tiêu chí linh hoạt và tối ưu hóa cho doanh nghiệp, khách hàng có thể đăng ký gói thuê kho lạnh lưu trữ dựa trên nhu cầu thực tế. Có thể thuê theo thời gian ngắn hạn, trung hạn, dài hạn và tính theo trọng lượng hàng hóa thực tế hoặc tính theo số lượng vị trí pallet.`,
      },
      {
        title: `Dịch vụ hỗ trợ`,
        desc: `Kho Lạnh Toàn Phát hỗ trợ các dịch vụ đi kèm khác như: đóng gói, dán tem, thay bao bì, phân loại hàng hóa, quấn PE,… với mức phí cạnh tranh nhất.`,
      },
    ],
  },
];

export const LocationMapContent = [
  {
    locale: 'vi',
    title: 'Vị trí cửa ngõ',
    desc: `Nhà máy Chiếu Xạ Toàn Phát và Kho Lạnh Toàn Phát được đặt tại Khu công nghiệp Phú An Thạnh (Bến Lức - Long An). Đây là vị trí vàng để kết nối đến các tuyến đường huyết mạch quốc gia, các “trục xương sống” trong hạ tầng giao thông của Đồng Bằng Sông Cửu Long. Đồng thời là tâm điểm kết nối đến hệ thống cảng sông, cảng biển và cảng hàng không quốc tế của khu vực. Lợi thế về vị trí sẽ giúp các doanh nghiệp tiết kiệm được chi phí lớn trong lộ trình vận chuyển hàng hoá đến cơ sở chiếu xạ, hay từ kho lạnh lưu trữ đến hệ thống cảng để xuất khẩu Nông - Thuỷ sản ra nước ngoài.`,
    sub: [
      {
        desc: `Ngay nút giao Cao tốc Trung Lương - Bến Lức , Cách Quốc lộ 1A: 3km`,
      },
      { desc: `Cách cảng Hiệp Phước: 35km` },
      {
        desc: `Cách cảng Cát Lái: 40km`,
      },
      {
        desc: `Cảng quốc tế Long An: 40km`,
      },
      {
        desc: `Cách cảng Cái Mép: 95km `,
      },
      {
        desc: `Cách cảng hàng không Quốc tế Tân Sơn Nhất: 42 km`,
      },
      {
        desc: `Giáp ranh với huyện Bình Chánh (TP. HCM) `,
      },
      {
        desc: `Cách trung tâm TP. HCM: 36km`,
      },
      {
        desc: `Tương lai gần kết nối trực tiếp đến cao tốc Bến Lức - Long Thành`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Cold storage',
    desc: `Cold storage system with a capacity of about 10,000 tons of goods.
Toan Phat cold storage service brings many values to customers:`,
    sub: [
      {
        desc: `No cost of construction, operation, warehouse management, saving investment costs`,
      },
      {
        desc: `Be proactive in importing and exporting goods throughout (24/7).`,
      },
      {
        desc: `Be proactive in irradiating goods stored at the warehouse without additional shipping costs.`,
      },
    ],
  },
];

export const contactAConsultant = [
  {
    locale: 'vi',
    title: 'Liên hệ tư vấn',
    desc: `Khách hàng cần tư vấn từ TPI, xin vui lòng điền đầy đủ thông tin sẽ có nhân viên liên hệ hỗ trợ trong vòng 24 giờ.`,
    username: { label: `Họ tên`, desc: `Nhập họ tên vào đây` },
    email: { label: `Email`, desc: `Nhập Email vào đây` },
    address: { label: `Địa chỉ`, desc: `Nhập địa chỉ vào đây` },
    typeProduct: { label: `Loại hàng`, desc: `Nhập loại hàng vào đây` },
    phone: { label: `Tư vấn dịch vụ`, desc: `Nhập số điện thoại vào đây` },
    register: { title: `Đăng ký`, label1: `Chiếu xạ`, label2: `Gửi kho` },
    note: { label: `Ghi chú`, desc: `Nhập ghi chú vào đây` },
    button: `Gửi thông tin`,
    directContact: {
      title: `Liên hệ trực tiếp`,
      sub: [
        {
          title: `Chiếu Xạ`,
          desc: [
            `Công ty TNHH Chiếu Xạ Toàn Phát`,
            `Địa chỉ: Lô A24-1, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.`,
            `MST: 1101846577`,
            `Hotline: 093 1000 001`,
            `Email: info@tpirr.vn`,
          ],
          button1: facebookButton,
          link1: item1_link1,
          button2: youtubeButton,
          link2: item1_link2,
        },
        {
          title: `Kho Lạnh`,
          desc: [
            `Công ty TNHH Toàn Phát - Kho Vận `,
            `Địa chỉ: Lô A24-2, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.`,
            `MST: 1101966433`,
            `Hotline: 092 191 6999`,
            `Email: tiepnhan@tprw.vn`,
          ],
          button1: facebookButton,
          link1: item2_link1,
          button2: youtubeButton,
          link2: item2_link2,
        },
      ],
    },
  },
  {
    locale: 'en-US',
    title: 'Contact consultation',
    desc: `Customers need advice from TPI, please fill in the information and a staff member will contact support within 24 hours.`,
    username: { label: `Full name`, desc: `Enter your name here` },
    email: { label: `Email`, desc: `Enter Email here` },
    address: { label: `Address`, desc: `Enter your address here` },
    typeProduct: { label: `Product Type`, desc: `Enter product type here` },
    phone: {
      label: `Consulting Services`,
      desc: `Enter your phone number here`,
    },
    register: { title: `Register`, label1: `Irradiation`, label2: `warehouse` },
    note: { label: `Note`, desc: `Enter a note here` },
    button: `Send information`,
    directContact: {
      title: `Direct contact`,
      sub: [
        {
          title: `Direct consulting: Information Department.`,
          desc: [`Phone number:`, `Email:`],
          button1: facebookButton,
          link1: item1_link1,
          button2: youtubeButton,
          link2: item1_link2,
        },
        {
          title: `Get registration schedule:`,
          desc: [`Receiving Department:`, `Phone number:`, `Email:`],
          button1: facebookButton,
          link1: item2_link1,
          button2: youtubeButton,
          link2: item2_link2,
        },
      ],
    },
  },
];

export const supportContent = [
  {
    locale: 'vi',
    title: 'Hỗ trợ',
    sub: [
      {
        title: 'Chiếu xạ',
        desc: `Công ty TNHH Chiếu Xạ Toàn Phát
        Địa chỉ: Lô A24-1, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.
        MST: 1101846577.
        Đăng ký dịch vụ:
        Email:
        SĐT:`,
      },
      {
        title: 'Thuê kho lạnh',
        desc: `Công ty TNHH Toàn Phát - Kho Vận 
        Địa chỉ: Lô A24-2, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An. 
        MST: 1101966433. 
        Đăng ký thuê kho: 
        Email:
        SĐT:`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Support',
    sub: [
      {
        title: 'Irradiation',
        desc: `Toan Phat Irradiation Co., Ltd
Address: Lot A24-1, Ngang 1 Street, Phu An Thanh Industrial Park, An Thanh Commune, Ben Luc District, Long An Province.
MST: 1101846577.
Register Service:
Email:
Tel:`,
      },
      {
        title: 'Cold storage rental',
        desc: `Toan Phat Co., Ltd - Warehouse
Address: Lot A24-2, Ngang 1 Street, Phu An Thanh Industrial Park, An Thanh Commune, Ben Luc District, Long An Province.
MST: 1101966433.
Register to rent a warehouse:
Email:
Tel:`,
      },
    ],
  },
];

export const goalsMain = [
  {
    locale: 'vi',
    title: 'Mục tiêu phát triển',
    sub: [
      {
        number: 1,
        desc: `TPI hứa hẹn sẽ vươn xa tầm quốc tế và mang lại giá trị bền vững đến đối tác cũng như toàn cộng đồng.`,
      },
      {
        number: 2,
        desc: `Tất cả đội ngũ, CBNV cùng vươn lên, tỏa sáng và tập thể luôn đồng lòng, gắn kết như những viên đá quý.`,
      },
      {
        number: 3,
        desc: `Từ lãnh đạo đến đội ngũ nhân viên các cấp các đội đều được đối xử bình đẳng, sẻ chia và được lắng nghe.`,
      },
      {
        number: 4,
        desc: `Từ lãnh đạo đến đội ngũ nhân viên các cấp các đội đều được đối xử bình đẳng, sẻ chia và được lắng nghe.`,
      },
      {
        number: 5,
        desc: `Sự gắn kết thể hiện trong đời sống sinh hoạt thường nhật tại công ty như những bữa ăn cùng nhau, những buổi tụ họp sinh nhật hay liên hoan.`,
      },
      {
        number: 6,
        desc: `Đội ngũ CBNV luôn hướng về mục tiêu chung, mỗi bộ phận luôn đảm nhiệm vai trò nhất định không thể tách rời. Từng mục tiêu nhỏ hướng về mục tiêu lớn đưa TPI ngày càng lớn mạnh và vươn xa tầm khu vực.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Goals',
    sub: [
      {
        number: 1,
        desc: `TPI promises to go beyond the international reach and bring sustainable value to partners as well as the whole community.`,
      },
      {
        number: 2,
        desc: `All teams and employees rise up, shine and the team is always united and connected like gems.`,
      },
      {
        number: 3,
        desc: `From leaders to staff at all levels, all teams are treated equally, shared and heard.`,
      },
      {
        number: 4,
        desc: `From leaders to staff at all levels, all teams are treated equally, shared and heard.`,
      },
      {
        number: 5,
        desc: `Cohesion manifests in daily life at the company such as meals together, birthday gatherings or parties.`,
      },
      {
        number: 6,
        desc: `The staff is always aiming for the common goal, each department always takes on a certain role that cannot be separated. Each small goal towards the big goal makes TPI grow stronger and reach out to the region.`,
      },
    ],
  },
];

export const goalsLogisticsAndSocial = [
  {
    locale: 'vi',
    sub: [
      {
        title: 'Chiến lược phát triển nguồn nhân lực',
        desc: `Tài sản lớn nhất của một doanh nghiệp không phải là tiền cũng không phải bất động sản mà chính là con người. Vì vậy phát triển nguồn nhân lực là vấn đề thiết yếu và được ưu tiên hàng đầu.`,
      },
      {
        title: 'Xã hội và cộng đồng',
        desc: `Hoạt động từ thiện với tinh thần tương thân tương ái, cảm thông và sẻ chia những khó khăn với cộng đồng.
Không chỉ dừng lại ở chiếu xạ nông sản và thủy sản, TPI còn nghiên cứu thực hiện ứng dụng chiếu xạ trên nhiều mặt hàng khác góp phần thúc đẩy xuất khẩu hàng hóa, và khẳng định giá trị Quốc gia.
Giá chiếu xạ trái cây tươi tại Việt Nam hiện còn khá cao. TPI cố gắng để đưa ra mức phí chiếu xạ hợp lý hơn nhằm hỗ trợ các nhà xuất khẩu có thêm sức cạnh tranh trên thị trường quốc tế.
`,
      },
    ],
  },
  {
    locale: 'en-US',
    sub: [
      {
        title: 'Human resource development strategy',
        desc: `The biggest asset of a business is neither money nor real estate, but people. Therefore, human resource development is an essential issue and a top priority.`,
      },
      {
        title: 'Society and community',
        desc: `Charity activities with the spirit of mutual affection, sympathy and sharing difficulties with the community.
Not only stopping at irradiation of agricultural and aquatic products, TPI also researches and applies irradiation on many other items, contributing to promoting export of goods, and affirming the national value.
The price of fresh fruit irradiation in Vietnam is still quite high. TPI strives to offer more reasonable irradiation fees to help exporters be more competitive in the international market.`,
      },
    ],
  },
];

export const supportContact = [
  {
    locale: 'vi',
    title: 'Liên hệ',
    desc: `Cảm ơn bạn đã liên hệ! Xin điền vào biểu mẫu, chúc bạn một ngày tốt lành!`,
    sub: [
      { title: `Tên của bạn` },
      { title: `Email của bạn` },
      { title: `Số điện thoại của bạn` },
      { title: `Quốc gia` },
      { title: `Tên công ty` },
      { title: `Quan tâm dịch vụ` },
      { title: `Thông điệp` },
    ],
    button: `Liên hệ`,
  },
  {
    locale: 'en-US',
    title: 'Contact',
    desc: `Thank you for getting in touch! Fill the form, have a great day!`,
    sub: [
      { title: `Your Name` },
      { title: `Your Email` },
      { title: `Your Phone Number` },
      { title: `Country` },
      { title: `Company Name` },
      { title: `Interested in service` },
      { title: `Message` },
    ],
    button: `Contact`,
  },
];

export const questionContent = [
  {
    locale: 'vi',
    title: `Q&A - Hỏi đáp`,
    desc: `Thông tin chi tiết về TPI`,
    sub: [
      {
        number: 1,
        title: `Chiếu xạ là gì?`,
        desc: `Chiếu xạ là sử dụng năng lượng bức xạ ion hóa để xử lý hàng hóa nhằm đảm bảo vấn đề vệ sinh và an toàn cho sản phẩm, thực phẩm. Hiện nay trên thế giới có rất nhiều nước sử dụng công nghệ này để xử lý và bảo quản hơn 40 loại sản phẩm, thực phẩm khác nhau, bao gồm trái cây, rau, ngũ cốc, cá, tôm, thịt, gia cầm, thiết bị y tế…`,
      },
      {
        number: 2,
        title: `Mục đích của Chiếu xạ thực phẩm?`,
        desc: `Phòng chống thực phẩm gây bệnh: Chiếu xạ có thể được sử dụng hiệu quả để loại bỏ vi sinh vật gây bệnh từ thực phẩm, chẳng hạn như Salmonella và Escherichia coli.

Bảo quản: Chiếu xạ có thể được sử dụng để tiêu diệt hoặc vô hoạt vi sinh vật gây hư hỏng và phân hủy thực phẩm, đồng thời kéo dài tuổi thọ của các loại thực phẩm.

Kiểm soát côn trùng: Chiếu xạ có thể được sử dụng để tiêu diệt côn trùng bên trong hoặc trên bề mặt các loại trái cây. Chiếu xạ cũng giúp giảm các hoạt động kiểm soát sâu bệnh khác có thể gây hại cho trái cây.
Ức chế sự nảy mầm và quá trình chín: Chiếu xạ có thể được sử dụng để ức chế sự nảy mầm (ví dụ như khoai tây) và trì hoãn quá trình chín của trái cây để tăng thời gian bảo quản.
`,
      },
      {
        number: 3,
        title: `Lợi ích của việc chiếu xạ thực phẩm?`,
        desc: `Thực phẩm chiếu xạ rất an toàn và mang lại nhiều lợi ích.

Tính an toàn về mặt sức khỏe cũng như lợi ích về mặt kinh tế của thực phẩm chiếu xạ đã được các tổ chức có uy tín của Liên Hiệp Quốc như: Tổ chức Y tế thể giới (WHO), Tổ chức Lương nông (FAO) và Cơ quan Năng lượng nguyên`,
      },
      {
        number: 4,
        title: `Chiếu xạ có làm thực phẩm bị nhiễm xạ?`,
        desc: `Thực phẩm được chiếu xạ không tiếp xúc trực tiếp với nguồn phát ra phóng xạ, nên không thể trở thành “thực phẩm bị nhiễm phóng xạ” do đó không có tác động xấu đến người sử dụng.`,
      },
      {
        number: 5,
        title: `Chiếu xạ có tạo ra các chất độc hại cho thực phẩm và con người?`,
        desc: `Thực phẩm sau khi chiếu xạ không gây ra ảnh hưởng tiêu cực đến sức khỏe con người vì không xuất hiện độc tố và không có bất kỳ sự thay đổi thành phần hóa học nào.

Các nhà máy vận hành công nghệ chiếu xạ phải tuân theo quy trình kỹ thuật rất nghiêm ngặt, rất an toàn nên không gây ra bất cứ ảnh hưởng tiêu cực nào cho môi trường sống của con người. `,
      },
      {
        number: 6,
        title: `Chiếu xạ có làm giảm các chất dinh dưỡng có trong thực phẩm?`,
        desc: `Chiếu xạ không làm giảm giá trị dinh dưỡng mà vẫn giữ nguyên các vitamin acid amin và acid béo có trong thực phẩm… ủy ban hỗn hợp giữa FAO, WHO và IAEA, đã có nhiều nghiên cứu và khẳng định chiếu xạ không làm giảm các tố chất dinh dưỡng trong thực phẩm.`,
      },
    ],
  },
  {
    locale: 'en-US',
    title: 'Q&A',
    desc: `Detailed information about TPI`,
    sub: [
      {
        number: 1,
        title: `What is irradiation?`,
        desc: `Irradiation is the use of ionizing radiation energy to process goods to ensure hygiene and safety for products and food. Currently, there are many countries in the world that use this technology to process and preserve more than 40 different types of products and foods, including fruits, vegetables, grains, fish, shrimp, meat, poultry, medical equipment…`,
      },
      {
        number: 2,
        title: `What is the purpose of Food Irradiation?`,
        desc: `Prevention of foodborne illness: Irradiation can be used effectively to eliminate foodborne pathogens, such as Salmonella and Escherichia coli.

Preservation: Irradiation can be used to kill or inactivate microorganisms that cause spoilage and decomposition of food and prolong the shelf life of foods.

Insect control: Irradiation can be used to kill insects inside or on the surface of fruits. Irradiation also helps reduce other pest control activities that can damage fruit.
Inhibition of germination and ripening: Irradiation can be used to inhibit germination (e.g. potatoes) and delay fruit ripening to increase shelf life.`,
      },
      {
        number: 3,
        title: `What are the benefits of food irradiation?`,
        desc: `Irradiated foods are very safe and offer many benefits.

The safety of health as well as economic benefits of irradiated foods have been recognized by prestigious United Nations organizations such as the World Health Organization (WHO), Food and Agriculture Organization (FAO) ) and the Raw Energy Agency`,
      },
      {
        number: 4,
        title: `Does irradiation make food contaminated?`,
        desc: `Irradiated food does not come into direct contact with radioactive sources, so it cannot become “radioactive food” and therefore has no adverse effects on the consumer.`,
      },
      {
        number: 5,
        title: `Does irradiation produce substances that are toxic to food and humans?`,
        desc: `Food after irradiation does not cause negative effects on human health because there is no toxicity and no change in chemical composition.

Factories operating irradiation technology must follow a very strict and safe technical process, so they do not cause any negative effects to the human living environment.`,
      },
      {
        number: 6,
        title: `Does irradiation reduce the nutrients present in food?`,
        desc: `Irradiation does not reduce the nutritional value, but still preserves the vitamins, amino acids and fatty acids found in food… Joint committee between FAO, WHO and IAEA, there have been many studies and confirmed that irradiation does not reduce the nutrients in food.`,
      },
    ],
  },
];

export const breadcrumb = {
  aboutUs: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Giới thiệu về TOAN PHAT GROUP' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'About TPI' }],
    },
  ],
  foodIrradiation: [
    {
      locale: 'vi',
      sub: [
        { path: '#', title: 'Lĩnh vực tiên phong' },
        { path: '#', title: 'Chiếu xạ' },
      ],
    },
    {
      locale: 'en-US',
      sub: [
        { path: '#', title: 'Pioneering field' },
        { path: '#', title: 'Irradiation' },
      ],
    },
  ],
  location: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Vị trí' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Location' }],
    },
  ],
  coldStorage: [
    {
      locale: 'vi',
      sub: [
        { path: '#', title: 'Lĩnh vực tiên phong' },
        { path: '#', title: 'Kho lạnh lưu trữ' },
      ],
    },
    {
      locale: 'en-US',
      sub: [
        { path: '#', title: 'Pioneering field' },
        { path: '#', title: 'Cold storage' },
      ],
    },
  ],
  goals: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Mục tiêu phát triển' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Goals' }],
    },
  ],
  contact: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Liên hệ' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Contact' }],
    },
  ],
  support: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Hỗ trợ' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Support' }],
    },
  ],
  questionAndAnswer: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Q&A' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Q&A' }],
    },
  ],
  market: [
    {
      locale: 'vi',
      sub: [{ path: '#', title: 'Thị trường' }],
    },
    {
      locale: 'en-US',
      sub: [{ path: '#', title: 'Market' }],
    },
  ],
};
