import styled from 'styled-components';
import { cartI } from '../types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import BackButton from '../components/atoms/buttons/backButton';

interface DetailViewI {
  setSelect: React.Dispatch<React.SetStateAction<cartI | undefined>>;
  select: cartI | undefined;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DetailDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: auto;
  max-width: 1000px;
`;

const DetailTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  color: ${(props) => props.theme.mainBlue};
  width: 100%;
  padding: 10px;
`;

const DetailView = ({ setSelect, select }: DetailViewI) => {
  const options = {
    responsive: true,
    scales: {
      Price: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
    },
  };

  if (select !== undefined) {
    const data = {
      labels: select.products.map((element) => element.title),
      datasets: [
        {
          label: 'Price',
          data: select.products.map((element) => element.price),
          backgroundColor: `#2550aa`,
          borderColor: '#2550aa',
          yAxisID: 'Price',
        },
        {
          label: 'Discounted price',
          data: select.products.map(
            (element) => element.discountedPrice / element.quantity
          ),
          backgroundColor: `black`,
          borderColor: 'black',
          yAxisID: 'Price',
        },
      ],
    };
    return (
      <DetailDiv>
        <BackButton onClick={() => setSelect(undefined)}>Back</BackButton>
        <DetailTitle>Cart: {select ? select.id : null}</DetailTitle>
        <Line options={options} data={data} />
      </DetailDiv>
    );
  }

  return null;
};

export default DetailView;
