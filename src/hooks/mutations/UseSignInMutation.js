import { useMutation } from '@tanstack/react-query';

import api from '@/api';

const UseSignInMutation = () => {
  return useMutation({
    mutationFn: (data) => api.post('/api/signin', data),
  });
};

export default UseSignInMutation;
