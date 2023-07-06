import { Btn } from './Button.styled';

export default function Button({ text, type = 'button', onClick }) {
  return (
    <Btn type={type} onClick={onClick}>
      {text}
    </Btn>
  );
}
