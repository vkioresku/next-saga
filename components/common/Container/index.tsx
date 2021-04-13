import * as S from './styled';

import { ContainerProps } from './Container';

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'xl',
}) => <S.Container maxWidth={maxWidth}>{children}</S.Container>;
