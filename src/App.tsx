import { Typography } from 'antd';

const App: React.FC = () => {
  const { Title } = Typography;

  return (
    <>
      <Title style={{ marginBottom: 0 }} level={4}>
        Tractian Challenge
      </Title>
    </>
  );
};

export default App;
