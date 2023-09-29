export interface ICustomField {
  name: string;
  placeholder?: string;
  type?: 'input' | 'textarea';
  icon?: string;
}

export interface IInitValuesForm {
  name: string;
  phone: string;
  message: string;
}
