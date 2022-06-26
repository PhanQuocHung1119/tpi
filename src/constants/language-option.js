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

export const foodIrradiationSystem = [
  {
    locale: 'vi',
    title: 'Chiếu xạ',
    desc: `TPI - Nhà máy duy nhất tại Việt Nam ứng dụng đầy đủ 3 công nghệ chiếu xạ:`,
    subDesc: [
      { desc: `Dây chuyền chiếu xạ bằng nguồn CoBalt 60 sử dụng tia gamma.` },
      {
        desc: `Hệ thống máy chiếu xạ bằng chùm tia điện tử (E-Beam) sử dụng chùm
              electron.`,
      },
      { desc: `Hệ thống máy chiếu xạ Bremsstrahlung (X-ray) sử dụng tia X.` },
    ],
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
  },
];

export const productOfIrradiation = [
  {
    locale: 'vi',
    title: 'Các sản phẩm được chiếu xạ tại TPI:',
    subDesc: [
      { desc: 'Trái cây tươi' },
      { desc: 'Đồ thủ công mỹ nghệ' },
      { desc: 'Gia vị' },
      { desc: 'Cá tra đông lạnh' },
      { desc: 'Thiết bị y tế' },
      { desc: 'Đá trang sức' },
      { desc: 'Thực phẩm - Nông sản' },
      { desc: 'Tôm đông lạnh' },
      { desc: 'Dược liệu, đông dược' },
      { desc: 'Thủy hải sản đông lạnh' },
      { desc: 'Hóa mỹ phẩm' },
      { desc: 'Các mặt hàng khô khác' },
      { desc: 'Trái cây đông lạnh' },
      { desc: 'Sản phẩm bằng tre, gỗ' },
      { desc: 'Thức ăn thú cưng' },
    ],
  },
  {
    locale: 'en-US',
    title: 'Products irradiated at TPI:',
    subDesc: [
      { desc: 'Fresh fruit' },
      { desc: 'Handicrafts' },
      { desc: 'Spice' },
      { desc: 'Frozen Pangasius' },
      { desc: 'Medical equipment' },
      { desc: 'Jewelry stone' },
      { desc: 'Food - Agricultural products' },
      { desc: 'Frozen shrimp' },
      { desc: 'Herbal medicine, oriental medicine' },
      { desc: 'Frozen seafood' },
      { desc: 'Cosmetics' },
      { desc: 'Other dry goods' },
      { desc: 'Frozen fruit' },
      { desc: 'Products made of bamboo and wood' },
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
    desc: `Hệ thống kho lạnh với sức chứa đạt khoảng 10.000 tấn hàng hóa.
Dịch vụ kho lạnh Toàn Phát mang lại nhiều giá trị cho các khách hàng:`,
    sub: [
      {
        desc: `Không tốn chi phí xây dựng, vận hành, quản lý kho, tiết kiệm chi phí đầu tư`,
      },
      { desc: `Chủ động trong việc xuất nhập hàng xuyên suốt (24/7).` },
      {
        desc: `Chủ động trong việc chiếu xạ hàng hóa đang lưu tại kho mà không tốn thêm phí vận chuyển phát sinh.`,
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
          title: `Tư vấn trực tiếp: Bộ Phận Thông Tin.`,
          desc: [`Số điện thoại:`, `Email:`],
        },
        {
          title: `Nhận lịch đăng ký:`,
          desc: [`Bộ Phận Tiếp Nhận :`, `Số Điện Thoại:`, `Email:`],
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
        },
        {
          title: `Get registration schedule:`,
          desc: [`Receiving Department:`, `Phone number:`, `Email:`],
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
