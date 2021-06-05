import { useRouter } from 'next/router';

function buildCheckedFields(fields: string | string[] | undefined) {
  if (fields === undefined) {
    return [];
  }

  if (typeof fields === 'string') {
    return [fields];
  }

  return fields;
}

export function useQueryStringForCheckbox(fieldName: string) {
  const { push, pathname, query } = useRouter();
  const checkedFields = buildCheckedFields(query[fieldName]);

  function buildQueryStringWhenChecked(fieldValue: string) {
    return {
      ...query,
      [fieldName]: [...checkedFields, fieldValue],
    };
  }

  function buildQueryStringWhenUnchecked(fieldValue: string) {
    return {
      ...query,
      [fieldName]: checkedFields.filter(
        (queryField) => queryField !== fieldValue,
      ),
    };
  }

  function buildQueryString(fieldValue: string, checked: boolean) {
    return checked
      ? buildQueryStringWhenChecked(fieldValue)
      : buildQueryStringWhenUnchecked(fieldValue);
  }

  function updateRouteURL(fieldValue: string, checked: boolean) {
    push({
      pathname: pathname,
      query: buildQueryString(fieldValue, checked),
    });
  }

  function isChecked(fieldValue: string) {
    return checkedFields.includes(fieldValue);
  }

  return {
    updateRouteURL,
    isChecked,
  };
}
