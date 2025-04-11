import { useMutation } from '@tanstack/react-query';

import api from '@/api';

const UseSignOutMutation = () => {
  return useMutation({
    mutationFn: () => api.post('/api/signin'),
  });
};

export default UseSignOutMutation;
