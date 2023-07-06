import { CastomTextField } from './Input.styled';

export default function Input({
  id = '',
  name = '',
  type = 'text',
  label = '',
  value = null,
  onChange = null,
  error = false,
  helperText = '',
  inputRef,
}) {
  return (
    <CastomTextField
      id={id}
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      inputRef={inputRef}
    />
  );
}
