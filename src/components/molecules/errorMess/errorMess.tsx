import ErrorBack from '../../atoms/errorsBox/errorBack';
import ErrorClose from '../../atoms/errorsBox/errorClose';
import ErrorDiv from '../../atoms/errorsBox/errorDiv';

interface ErrorMessI {
  mess: string;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ErrorMess = ({ mess, setError }: ErrorMessI) => (
  <ErrorBack>
    <ErrorDiv>
      <ErrorClose onClick={() => setError(undefined)}>X</ErrorClose>
      {mess}
    </ErrorDiv>
  </ErrorBack>
);

export default ErrorMess;
