import * as S from './styles';

import { ButtonProps } from './Button';

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <S.Button onClick={onClick}>Click me!</S.Button>;
};
