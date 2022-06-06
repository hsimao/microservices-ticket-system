const index = ({ currentUser }) => {
  return (
    <div>
      <h1>{currentUser ? 'You are signed in' : 'You are NOT signed in'}</h1>
    </div>
  );
};

index.getInitialProps = async (context, currentUser) => {
  return { currentUser };
};

export default index;
