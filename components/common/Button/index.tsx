import Cube from '@Public/svg/cube.svg';
import * as S from './styles';

import { ButtonProps } from './Button';

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <S.Button onClick={onClick}>
      Click me! <Cube />
    </S.Button>
  );
};
