type GreetingProps = {
  person: {
    firstName: string;
    lastName: string;
  };
};

function Greeting({ person }: GreetingProps) {
  const { firstName, lastName } = person;
  return (
    <div>
      <h1 className="greeting">
        Olá
        {' '}
        {`${firstName} ${lastName}`}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      </h1>
    </div>
  );
}

export default Greeting;
