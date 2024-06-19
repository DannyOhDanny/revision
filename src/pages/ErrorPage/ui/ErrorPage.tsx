import { StyledError } from '../ui/styled.ts';

export default function ErrorPage() {
  return (
    <StyledError>
      <div id="error-page">
        <div>
          <h1>Упс</h1>
          <p>Неизвестная ошибка</p>
        </div>
      </div>
    </StyledError>
  );
}
