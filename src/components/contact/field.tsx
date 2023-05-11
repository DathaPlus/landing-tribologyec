import { ICustomField } from '@interfaces/field';
import { ErrorMessage, Field, FieldProps } from 'formik';
import { Icon } from '@dathaplus/storybook'
import React, { FC } from 'react';

export const FieldCustom: FC<ICustomField> = ({ name, placeholder, type = 'input', icon }) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <>
        {type === 'input' ? (
          <div className="wrapper_input">
            <input placeholder={placeholder} {...field} />
            {icon && <Icon name={icon}/>}
          </div>
        ) : (
          <div className="wrapper_input">
            <textarea placeholder={placeholder} {...field} />
            {icon && <Icon name={icon}/>}
          </div>
        )}
        {/* <ErrorMessage name={name} render={(msg) => <span className='input_error_message'>{msg}</span>} /> */}
      </>
    )}
  </Field>
);

export default FieldCustom;
