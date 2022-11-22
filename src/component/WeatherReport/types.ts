export type weatherDataType = {
    dataFetched: boolean;
    weather: { id: number; main: string; description: string; icon: string }[];
    main: { temp: number };
    name: string;
  };
  