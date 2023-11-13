/*
  useDebounce might be overkill right now but could come in handy if the validations start to get more complex in the future.
  For example: if the password has to be validated on the server as well, useDebounce would help to prevent many unnecesary API requests.
*/

import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
