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
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
