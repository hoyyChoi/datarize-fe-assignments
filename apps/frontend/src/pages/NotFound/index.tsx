import { useNavigate } from 'react-router'
import * as S from './NotFoundPage.styled'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Code>404</S.Code>
      <S.Title>페이지를 찾을 수 없습니다</S.Title>
      <S.Description>
        요청하신 페이지가 존재하지 않거나
        <br />
        이동되었을 수 있습니다.
      </S.Description>

      <S.HomeButton onClick={() => navigate('/')}>메인으로 돌아가기</S.HomeButton>
    </S.Wrapper>
  )
}
