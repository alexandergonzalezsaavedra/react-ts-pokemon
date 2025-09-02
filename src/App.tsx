import PokemonDisplay from './components/pokemon-display';
import PokemonForm from './components/pokemon-form';
import PokemonResult from './components/pokemon-result';

const App = () => {
	return (
		<div className='container mx-auto my-5'>
			<div className='row d-flex justify-content-center'>
				<div className='col-12 col-md-6 col-lg-4'>
					<PokemonDisplay />
					<PokemonForm />
					<PokemonResult />
				</div>
			</div>
		</div>
	);
};

export default App;
