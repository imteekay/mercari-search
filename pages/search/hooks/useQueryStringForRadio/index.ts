import { useRouter } from 'next/router';

export function useQueryStringForRadio(fieldName: string) {
  const { push, pathname, query } = useRouter();

  function updateRouteURL(value: string) {
    push({
      pathname,
      query: {
        ...query,
        [fieldName]: value,
      },
    });
  }

  function isChecked(value: string) {
    return value === query[fieldName];
  }

  return { updateRouteURL, isChecked };
}
