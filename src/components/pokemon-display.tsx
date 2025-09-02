const PokemonDisplay = () => {
	const showAnswer = false;
	const image =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
	const name = 'Bulbasaur';

	return (
		<div className='card'>
			<div className='card-header'>
				<h1 className='text-center'>{showAnswer ? name : '¿Quién es ese Pokémon?'}</h1>
			</div>
			<div className='card-body'>
				<img
					className='img-fluid mx-auto d-block'
					src={image}
					alt='Pokémon'
					style={{
						maxHeight: '200px',
						filter: showAnswer ? 'none' : 'brightness(0)',
						transition: 'filter 0.3s ease',
					}}
				/>
			</div>
		</div>
	);
};

export default PokemonDisplay;
