import Link from 'next/link';
import { useRouter } from 'next/router';

import Box from '@material-ui/core/Box';
import { categories } from 'Product/Categories/categories';

const CategoriesList = () => {
  const { pathname, query } = useRouter();

  return (
    <Box mt={1} mb={2}>
      {categories.map(({ id, label }) => (
        <Box key={`${id}-${label}`} mb={1}>
          <Link
            href={{
              pathname,
              query: {
                ...query,
                categoryId: id,
              },
            }}
          >
            {label}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default CategoriesList;
