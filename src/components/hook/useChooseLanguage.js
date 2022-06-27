import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useChooseLanguage = (item, ref) => {
  const router = useRouter();
  const [state, setState] = useState(null);
  const arrResult = (_arrMain, _ref, _router) => {
    if (typeof window != 'undefined' && !!_router) {
      _ref.current = _arrMain?.find((_m) => _m?.locale == _router.locale);
    }
    if (_ref.current) setState();
  };

  useEffect(() => {
    arrResult(item, ref, router);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, ref, router.locale]);
};

export { useChooseLanguage };
