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
    scrollPos: 'start' | 'end'
  ) => {
    console.log({ el: document.getElementById(viewContainerID) });
  
    document.getElementById(viewContainerID)?.scrollIntoView({
      behavior: 'smooth',
      block: scrollPos,
      inline: 'nearest',
    });
  };

  export const noop = () => {};
