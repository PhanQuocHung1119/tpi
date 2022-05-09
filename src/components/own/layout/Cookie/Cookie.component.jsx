import { useMobileMatches } from 'components/hook/useContextSelector';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { includes } from 'lodash-es';
const Root = styled.div`
  min-height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007770;

  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ mobile }) => (mobile ? '10px' : '14px')};
  line-height: 140%;

  text-align: center;

  color: #ffffff;
  padding-right: 30px;
`;

const IconButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 6px;
  top: 6px;
`;

const CloseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='23'
    height='24'
    viewBox='0 0 23 24'
    fill='none'
  >
    <path
      d='M14.1176 9L8.47058 15'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.1176 15L8.47058 9'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.353 3.75H4.2353C3.84545 3.75 3.52942 4.08579 3.52942 4.5V19.5C3.52942 19.9142 3.84545 20.25 4.2353 20.25H18.353C18.7428 20.25 19.0588 19.9142 19.0588 19.5V4.5C19.0588 4.08579 18.7428 3.75 18.353 3.75Z'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const detailUrl = [
  'diamond/',
  'detail-single-product/',
  'detail-custom-size-product/',
  'product/',
  'detail-couple-product/',
];

const CookieComponent = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const matches = useMobileMatches();
  useEffect(() => {
    const path = router.pathname?.replace('/', '').replace('[slug]', '');
    if (includes(detailUrl, path)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [router.pathname]);

  const closeNotification = useCallback(() => {
    const myHeader = document.getElementById('header-sticky');
    if (myHeader) myHeader.style.borderTop = '4px solid #007770';
    setOpen(false);
  }, []);

  if (!open) return <div />;

  return (
    <Root id='notification-vcr' mobile={matches}>
      MỖI ĐƠN ĐẶT HÀNG ONLINE ĐƯỢC KIỂM TRA CHẤT LƯỢNG CHẶT CHẼ VÀ VẬN CHUYỂN
      MIỄN PHÍ TỪ VĨNHCARA
      <IconButton onClick={closeNotification}>
        <CloseIcon />
      </IconButton>
    </Root>
  );
};

export { CookieComponent };
