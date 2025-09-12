const Spiner = () => {
	return (
		<div className='d-flex justify-content-center'>
			<div
				className='spinner-border'
				role='status'>
				<span className='visually-hidden'>Cargando Pokemón...</span>
			</div>
		</div>
	);
};

export default Spiner;
