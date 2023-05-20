import { useState, useEffect, useRef } from "react";
import { breakpoints } from "../theme/breakpoint";

export const useScreenWidth = (): [number] => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return [screenWidth];
};

export const useCheckRequiredValue = ({
  values,
  type = "and",
}: {
  values: boolean[];
  type: "or" | "and";
}) => {
  const [allowAction, setAllowAction] = useState<boolean>(false);

  useEffect(() => {
    if (type === "and") {
      values.forEach((val) => {
        if (!val) {
          setAllowAction(false);
        } else {
          setAllowAction(true);
        }
      });
    }

    if (type === "or") {
      values.some((val) => {
        if (val) {
          setAllowAction(true);
        }
      });
    }
  }, [...values]);

  return [allowAction];
};

export const useOutsideClickHook = (handler: (event: Event) => void, ref) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const current = ref.current as HTMLElement | null;

      // Do nothing if clicking ref's element or descendent elements
      if (
        !current ||
        current.contains(event.target as Node)
        // [...document.querySelectorAll("[data-prevent-outside-click]")].some(
        //   (el) => el.contains(event.target as Node)
        // )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("pointerdown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export const useInMobile = () => {
  const [screenWidth] = useScreenWidth();

  return breakpoints.LARGE_MOBILE >= screenWidth;
};

export const useKeyPressEvent = ({
  keyCode,
  onPressEvent,
}: {
  keyCode: string;
  onPressEvent: Function;
}) => {
  const onKeyPressHandler = (event: KeyboardEvent) => {
    if (event.code === keyCode) {
      onPressEvent(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressHandler);
    return () => document.removeEventListener("keydown", onKeyPressHandler);
  });
};
