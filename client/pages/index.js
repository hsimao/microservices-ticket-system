import buildClient from '../api/build-client';

const index = ({ currentUser }) => {
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

index.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default index;
