import { useQuery } from '@tanstack/react-query';

import api from '@/api';

const UseListingsQuery = (filters) => {
  return useQuery({
    queryKey: ['listings', filters],
    queryFn: () => api.get('/api/listings', filters),
  });
};

export default UseListingsQuery;
