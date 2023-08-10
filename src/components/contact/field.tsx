import { ICustomField } from '@interfaces/field';
import { Field, FieldProps } from 'formik';
import { Icon } from '@dathaplus/storybook';
import React, { FC } from 'react';

export const FieldCustom: FC<ICustomField> = ({ name, placeholder, type = 'input', icon }) => (
  <Field name={name}>
    {({ field }: FieldProps) => (
      <>
        {type === 'input' ? (
          <div className="wrapper_input">
            <input placeholder={placeholder} {...field} />
            {icon && <Icon name={icon} />}
          </div>
        ) : (
          <div className="wrapper_input">
            <textarea placeholder={placeholder} {...field} />
            {icon && <Icon name={icon} />}
          </div>
        )}
      </>
    )}
  </Field>
);

export default FieldCustom;
