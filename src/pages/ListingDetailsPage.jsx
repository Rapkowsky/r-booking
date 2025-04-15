import { useParams } from 'react-router-dom';

import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailsCard';
import useListingReviewsQuery from '@/hooks/queries/useListingReviewsQuery';
import UseListingsDetailsQuery from '@/hooks/queries/UseListingsDetailsQuery';

const ListingDetailsPage = () => {
  const { listingId } = useParams();

  const {
    data: { data: listing } = {},
    error,
    isLoading,
  } = UseListingsDetailsQuery(listingId);

  const {
    data: { data: reviews } = {},
    error: reviewsError,
    isLoading: isReviewsLoading,
  } = useListingReviewsQuery(listingId);

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ListingDetailsCard listing={listing} />
      </DataRenderer>
    </div>
  );
};

export default ListingDetailsPage;
