import luckyNumber from './utils/luckyNumber';

function LuckyNumber() {
  const show = false;
  return (
    <div>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      {show ? (
        <ul>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
        </ul>
      ) : (
        <h3 className="subtitle">Não há números para serem exibidos 😢</h3>
      )}
    </div>
  );
}

export default LuckyNumber;
