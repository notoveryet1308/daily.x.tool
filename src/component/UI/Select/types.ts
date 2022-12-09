export type optionType = {
    label: string;
    value: string;
    id: string;
  };
  
  export type selectProps = {
    name: string;
    onMenuOpen?: Function;
    options: optionType[];
    values: optionType[];
    onChange: Function;
    isClearable?: boolean;
    isSearchable?: boolean;
    isCreatable?: boolean;
    btnLabel?: string;
    searchPlaceholder?: string;
  };
  