import React from 'react';
import classNames from 'classnames';

const InputGroupFormGroup = (field) => {
  const { input, label, type, meta, placeholder } = field;
  const error = meta.touched && meta.error;
  
  return (
    <div className="form-group">
      {label ? (
        <label className={classNames(
          "input-label",
          {"text-error": error})}>
          {label}
          <span/>
        </label>
      ) : null}
      <div className="input-group">
        <span className="input-group-addon">$</span>
        <input
          className={classNames(
            "form-control",
            {"bg-error": error})}
          placeholder={placeholder}
          type={type}
          {...input}/>
      </div>
      {error && <span className="text-error">{meta.error}</span>}
    </div>
  );
};

export default InputGroupFormGroup;