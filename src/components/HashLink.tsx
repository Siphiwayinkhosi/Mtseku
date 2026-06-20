import {
  Link,
  useLocation,
} from "react-router-dom";
import type { LinkProps, To } from "react-router-dom";
import { scrollToHash } from "@/lib/hash-scroll";

const getHashFromTo = (to: To) => {
  if (typeof to === "string") {
    const [pathnameWithSearch, hash = ""] = to.split("#");
    return {
      pathname: pathnameWithSearch || window.location.pathname,
      hash: hash ? `#${hash}` : "",
    };
  }

  return {
    pathname: to.pathname || window.location.pathname,
    hash: to.hash || "",
  };
};

const HashLink = ({ onClick, to, ...props }: LinkProps) => {
  const location = useLocation();

  return (
    <Link
      {...props}
      to={to}
      onClick={(event) => {
        onClick?.(event);

        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.altKey ||
          event.ctrlKey ||
          event.shiftKey
        ) {
          return;
        }

        const target = getHashFromTo(to);
        if (
          target.hash &&
          target.pathname === location.pathname &&
          target.hash === location.hash
        ) {
          event.preventDefault();
          scrollToHash(target.hash);
        }
      }}
    />
  );
};

export default HashLink;
