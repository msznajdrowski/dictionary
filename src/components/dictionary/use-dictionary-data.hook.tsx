import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { filterStringsByPrefix } from "../../utils/filter-strings-by-prefix";

const STORAGE_SEARCH_VALUE_KEY = "dictionary-search";

const useDictionaryData = (data: string[]) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const checkForStorageValue = () => {
    const storedValue = sessionStorage.getItem(STORAGE_SEARCH_VALUE_KEY);

    if (storedValue) {
      setSearchValue(storedValue);
    }
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchValue(value);
    sessionStorage.setItem(STORAGE_SEARCH_VALUE_KEY, value);
  };

  useEffect(() => {
    checkForStorageValue();
  }, [checkForStorageValue]);

  const filteredData = useMemo(() => {
    return filterStringsByPrefix(data, searchValue);
  }, [data, searchValue]);

  return {
    searchValue,
    handleChangeSearch,
    filteredData,
  };
};

export { useDictionaryData };
