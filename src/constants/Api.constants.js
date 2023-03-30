import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

// export const API_ENDPOINT = publicRuntimeConfig.apiEndpoint;
export const ROOT_DOMAIN = publicRuntimeConfig.rootDomains;
// export const API_UPLOAD_IMAGE = publicRuntimeConfig.apiUploadImage;
export const fetcher = (url) => fetch(url).then((res) => res.json());
