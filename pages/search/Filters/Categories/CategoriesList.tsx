import Link from 'next/link';
import { useRouter } from 'next/router';

import { categories } from 'Product/Categories/categories';

const CategoriesList = () => {
  const { pathname, query } = useRouter();

  return (
    <>
      {categories.map(({ id, label }) => (
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
      ))}
    </>
  );
};

export default CategoriesList;
