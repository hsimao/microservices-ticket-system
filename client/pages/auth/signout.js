import { useEffect } from 'react';
import Rotuer from 'next/router';
import useRequest from '../../hooks/use-request';

function signup() {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Rotuer.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signing you out...</div>;
}

export default signup;
