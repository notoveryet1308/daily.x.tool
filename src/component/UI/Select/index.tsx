import {
    Props,
    GroupBase,
    components,
    ControlProps,
    StylesConfig,
  } from 'react-select';
  import { StyledCreatableSelect, StyledControlComponent } from './style';
  import CreatableSelect from 'react-select/creatable';
  import { useAppDataContext } from '../../../Context/AppDataContext';
  import theme from '../../../theme';
  
  type Option = {
    label: string;
    value: string;
  };
  
  declare module 'react-select/dist/declarations/src/Select' {
    export interface Props<
      Option,
      IsMulti extends boolean,
      Group extends GroupBase<Option>
    > {
      wrapperClassName?: string;
    }
  }
  
  function CreateAbleSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
  >(props: Props<Option, IsMulti, Group>) {
    const { themeMode } = useAppDataContext();
    const colors = theme.colors[themeMode];
    return (
      <CreatableSelect
        {...props}
        className={`create-select-rr ${props.className}`}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: 'none',
            border: 'none',
            outline: 'none',
            background: colors.secondaryBgColor,
            boxShadow: 'unset',
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            marginTop: '4px',
            background: colors.primaryBgColor,
          }),
        }}
      />
    );
  }
  
  export default CreateAbleSelect;
  