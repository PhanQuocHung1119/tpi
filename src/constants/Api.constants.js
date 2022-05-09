import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API_ENDPOINT = publicRuntimeConfig.apiEndpoint;
export const ROOT_DOMAIN = publicRuntimeConfig.rootDomains;
export const API_UPLOAD_IMAGE = publicRuntimeConfig.apiUploadImage;
export const fetcher = (url) => fetch(url).then((res) => res.json());

export const RouteAPI = {
  MENU: API_ENDPOINT + '/menu',
  MENU_FOOTER: API_ENDPOINT + '/general-info/3',
  SOCIAL_LINK: API_ENDPOINT + '/general-info/4',
  NEW_PRODUCT: API_ENDPOINT + '/jewellery/new',
  RETURN_FORMS: API_ENDPOINT + '/return-forms',
  MEMBERSHIPS: API_ENDPOINT + '/memberships',
  POLICIES: API_ENDPOINT + '/policies',
  EVENTS: API_ENDPOINT + '/blogs?orderBy=publishAtDesc&category=su-kien',
  NEWS: API_ENDPOINT + '/blogs?orderBy=publishAtDesc&category=tin-tuc',
  EXPLORES: API_ENDPOINT + '/blogs?orderBy=publishAtDesc&category=kham-pha',
  TRENDS: API_ENDPOINT + '/blogs?orderBy=publishAtDesc&category=xu-huong',
  STYLES: API_ENDPOINT + '/blogs?orderBy=publishAtDesc&category=phong-cach',
  EVENTS_DETAIL: API_ENDPOINT + '/blogs',
  ABOUT_US: API_ENDPOINT + '/blogs/lich-su-hinh-thanh',
  PEOPLE_CAREER: API_ENDPOINT + '/blogs/con-nguoi-su-nghiep',
  ABOUT_DIAMOND: API_ENDPOINT + '/blogs?category=hieu-ve-kim-cuong',
  BLOG_TYPES: API_ENDPOINT + '/blogType',
  BLOGS_HIGHT_LIGHT: API_ENDPOINT + '/blogs-highlight',
  UPLOAD_IMAGE: API_UPLOAD_IMAGE + '/files',

  STORE_CONTACT: API_ENDPOINT + '/store-contacts',
  LOCATIONS: API_ENDPOINT + '/locations',
  DIAMONDS: API_ENDPOINT + '/diamonds',
  CATEGORY: API_ENDPOINT + '/categories',
  JEWELLERY: API_ENDPOINT + '/jewellery',
  ATTRIBUTES: API_ENDPOINT + '/attributes',
  GENERAL_INFO: API_ENDPOINT + '/general-info',
  LUXURY: API_ENDPOINT + '/luxury-jewelleries',
  JEWELLERY_SETS: API_ENDPOINT + '/combo',
  ORDERS: API_ENDPOINT + '/orders',

  LOGIN: API_ENDPOINT + '/login',
  CREATE_CLIENT: API_ENDPOINT + '/users',
  BLOGS: API_ENDPOINT + '/blogs',
  PAGE_SETTINGS: API_ENDPOINT + '/page-setting',
  PAGE_SETTING_INFO: API_ENDPOINT + '/page-setting-info?page=',
  FORGET_PASSWORD: API_ENDPOINT + '/forget-password',
  RESET_PASSWORD: API_ENDPOINT + '/reset-password',
  SEARCH: API_ENDPOINT + '/search',
  COLLECTIONS: API_ENDPOINT + '/collections',
};

export const PrivateAPI = {
  WishList: '/wishlist',
  ClientAccountInfo: '/info',
  ORDER_LIST: '/orders',
  CART: '/cart',
  CART_ITEM: '/cart-items',
  USER_INFO: '/info',
  CUSTOMER_MEMBERSHIPS: '/customer-memberships/',
  SAVED_ADDRESSES: '/saved-addresses',
  COUPON_LIST: '/coupons',
  LOGOUT: '/logout',
  CHANGE_PASSWORD: '/password',
};
