import { useRouteError } from 'react-router-dom';
import { StyledError } from '../ui/styled.ts';
export function ErrorPage() {
  const error = useRouteError();
  const errorMessage =
    typeof error === 'string' || error instanceof Error
      ? error.toString()
      : 'An unexpected error occurred';

  return (
    <StyledError>
      <div id="error-page">
        <div>
          <h1>Упс</h1>
          <p>Неизвестная ошибка</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </div>
    </StyledError>
  );
}
