import { ICustomField } from '@interfaces/field';
import { ErrorMessage, Field, FieldProps } from 'formik';
import React, { FC } from 'react';

export const FieldCustom: FC<ICustomField> = ({ name, placeholder, type = 'input', icon }) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <>
        {type === 'input' ? (
          <div className="wrapper_input">
            <input placeholder={placeholder} {...field} />
          </div>
        ) : (
          <div className="wrapper_input">
            <textarea placeholder={placeholder} {...field} />
          </div>
        )}
        <ErrorMessage name={name} render={(msg) => <div style={{ color: '#FFFFFF' }}>{msg}</div>} />
      </>
    )}
  </Field>
);

export default FieldCustom;
