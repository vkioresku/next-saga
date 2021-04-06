import * as S from './styles';
import Cube from '../../../public/svg/cube.svg';

import { ButtonProps } from './Button';

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <S.Button onClick={onClick}>
      Click me! <Cube />
    </S.Button>
  );
};
