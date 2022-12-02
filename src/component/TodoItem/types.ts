export type CreateTodoValueType = {
    description: string;
    duration?: number;
    showCommand: boolean;
  };
  
  export type DispatchType = {
    type: 'set-duration' | 'set-description' | 'show-command' | 'reset';
  
    payload: string | boolean | number;
  };
  