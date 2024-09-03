export interface ICustomField {
  name: string;
  placeholder?: string;
  type?: 'input' | 'textarea';
  icon?: string;
  inputType?:string;
}

export interface IInitValuesForm {
  name: string;
  phone: string;
  message: string;
}
