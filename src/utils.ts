import jwt_decode from "jwt-decode";

export const _debounce = ({
  func,
  delay,
}: {
  func: Function;
  delay: number;
}): Function => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

export const ScrollInView = (
  viewContainerID: string,
  scrollPos: "start" | "end"
) => {
  document.getElementById(viewContainerID)?.scrollIntoView({
    behavior: "smooth",
    block: scrollPos,
    inline: "nearest",
  });
};

export const noop = () => {};

export const isUserAuthenticated = () => {
  const token = localStorage.getItem("accessToken");

  return !!token;
};

export const getCurrentLoggedInUserDeatil = () => {
  const token = localStorage.getItem("accessToken");
  const decoded: { email: string; _id: string; name: string } | null = token
    ? jwt_decode(token)
    : null;

  return decoded;
};

export const securedUrlRegex = (value: string) => {
  const regex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  return regex.test(value);
};
