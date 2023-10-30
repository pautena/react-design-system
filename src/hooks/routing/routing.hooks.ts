import { useEffect, useRef } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export interface NavigateWhenValueChangesOptions<T> {
  from: T;
  to: T;
}

export const useNavigateWhenValueChanges = <T>(
  path: string,
  value: T | undefined,
  { from, to }: NavigateWhenValueChangesOptions<T>,
) => {
  const prevRef = useRef<T>();
  const navigate = useNavigate();

  useEffect(() => {
    if (prevRef.current === from && value === to) {
      navigate(path);
    }
    prevRef.current = value;
  }, [value]);
};

export const useRouteMatch = (patterns: string[]) => {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
};
