import { useState, useEffect } from "react";

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
