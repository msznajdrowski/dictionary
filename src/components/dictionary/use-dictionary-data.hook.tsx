import { ChangeEvent, useMemo, useState } from "react";
import { filterStringsByPrefix } from "../../utils/filter-strings-by-prefix";

const useDictionaryData = (data: string[]) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

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
