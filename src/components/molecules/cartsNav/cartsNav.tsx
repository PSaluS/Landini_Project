import { requestParamI } from '../../../types';
import NavP from '../../atoms/nav/navP';
import NavRaw from '../../atoms/nav/navRaw';

interface CartsNavI {
  requestParam: requestParamI;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const CartsNav = ({ requestParam, page, setPage }: CartsNavI) => (
  <NavRaw>
    {requestParam && requestParam.pages.length > 1
      ? requestParam.pages.map((element) => {
          if (element - 1 === page)
            return (
              <div key={`navPages: ${element}`}>
                <NavP here>{element}</NavP>
              </div>
            );
          else
            return (
              <div
                key={`navPages: ${element}`}
                onClick={() => setPage(element - 1)}
              >
                <NavP>{element}</NavP>
              </div>
            );
        })
      : null}
  </NavRaw>
);

export default CartsNav;
