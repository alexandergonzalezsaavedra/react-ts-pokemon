interface PokemonStatsProps {
  wins: number;
  losses: number;
  winRate: number;
}

const PokemonStats = ({ wins, losses, winRate }: PokemonStatsProps) => {
  const totalGames = wins + losses;

  return (
    <div className="mt-8 text-white p-4 bg-blue-600 rounded-lg shadow-lg">
      <h2 className="font-pokemon text-3xl text-yellow-400 stroke-blue-800 tracking-widest text-center mb-4">Estadísticas del Juego</h2>
      <div className="flex justify-around text-center">
        <div>
          <h4 className="font-bold text-lg">Victorias</h4>
          <p className="text-3xl font-bold text-green-400">{wins}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Derrotas</h4>
          <p className="text-3xl font-bold text-red-400">{losses}</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h4 className="font-bold text-lg">Total de Juegos</h4>
        <p className="text-3xl font-bold">{totalGames}</p>
      </div>
      <div className="mt-4">
        <h4 className="font-bold text-lg text-center">Efectividad</h4>
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div
            className="bg-yellow-400 h-6 rounded-full text-center text-blue-600 font-bold"
            style={{ width: `${winRate}%` }}
          >
            {winRate}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
