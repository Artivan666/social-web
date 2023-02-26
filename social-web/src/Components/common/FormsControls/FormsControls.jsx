import { Field } from 'redux-form'
import s from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.textarea + ' ' + (hasError ? s.error : '')}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.input + ' ' + (hasError ? s.error : '')}>
      <input {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
// props это не те пропсы что в компоненте
export const createField = (
  component,
  name,
  validate,
  placeholder,
  props = {},
  text = ''
) => {
  return (
    <div>
      <Field
        component={component}
        name={name}
        validate={validate}
        placeholder={placeholder}
        {...props}
      />
      {text}
    </div>
  )
}
