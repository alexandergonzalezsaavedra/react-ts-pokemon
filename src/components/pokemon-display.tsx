import type { Pokemon } from '../types/pokemon.interface';
import Spiner from './spiner';
interface PokemonDisplayProps {
	pokemon: Pokemon | null;
	isLoading: boolean;
}

const PokemonDisplay = ({ pokemon, isLoading }: PokemonDisplayProps) => {
	const showAnswer = false;
	const image = pokemon?.image;
	const name = pokemon?.name;

	console.log(name);

	return (
		<div className='card'>
			<div className='card-header'>
				<h1 className='text-center'>{showAnswer ? name?.toUpperCase() : '¿Quién es ese Pokémon?'}</h1>
			</div>
			<div className='card-body'>
				{isLoading ? (
					<Spiner />
				) : (
					<img
						className='img-fluid mx-auto d-block'
						src={image}
						alt=''
						style={{
							maxHeight: '200px',
							filter: showAnswer ? 'none' : 'brightness(0)',
							transition: 'filter 0.3s ease',
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default PokemonDisplay;
