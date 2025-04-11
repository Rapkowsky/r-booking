import { useQuery } from '@tanstack/react-query';

import api from '@/api';

const UseListingsDetailsQuery = (listingId) => {
  return useQuery({
    queryKey: ['listings', listingId],
    queryFn: () => api.get('/api/listings', listingId),
  });
};

export default UseListingsDetailsQuery;
