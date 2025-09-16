interface PokemonStatsProps {
  wins: number;
  losses: number;
  winRate: number;
}

const PokemonStats = ({ wins, losses, winRate }: PokemonStatsProps) => {
  const totalGames = wins + losses;

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2 className="text-center">Estadísticas del Juego</h2>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-around text-center">
          <div>
            <h4>Victorias</h4>
            <p className="fs-3 text-success">{wins}</p>
          </div>
          <div>
            <h4>Derrotas</h4>
            <p className="fs-3 text-danger">{losses}</p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <h4>Total de Juegos</h4>
          <p className="fs-3">{totalGames}</p>
        </div>
        <div className="mt-3">
          <h4 className="text-center">Efectividad</h4>
          <div className="progress" style={{ height: '25px' }}>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: `${winRate}%` }}
              aria-valuenow={winRate}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {winRate}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;