import React from 'react';
import {ErrorMessage, Field, FieldProps} from "formik";
import {inputForm, inputIcon, inputStyle, textAreaForm, textAreaStyle} from "@components/form/style";
import FeatherIcon from 'feather-icons-react';

interface IProps {
  name: string;
  placeholder?: string;
  type?: 'input' | 'textarea';
  nameIcon: string;
}

export const FieldCustom = ({name, placeholder, type = 'input', nameIcon}: IProps) => (
  <Field name={name}>
    {
      ({field}: FieldProps) => (
        <>
          {
            type === 'input' ? (
              <div {...inputStyle}><input placeholder={placeholder} {...inputForm} {...field} />
                <div {...inputIcon}><FeatherIcon icon={nameIcon} size='20' fill='transparent'/></div>
              </div>) : (
              <div {...textAreaStyle}><textarea placeholder={placeholder} {...textAreaForm} {...field} />
                <div {...inputIcon}><FeatherIcon icon={nameIcon} size='20' fill='transparent'/></div>
              </div>)
          }
          <ErrorMessage name={name} render={msg => <div style={{color: '#FFFFFF'}}>{msg}</div>}/>
        </>
      )
    }
  </Field>
);

