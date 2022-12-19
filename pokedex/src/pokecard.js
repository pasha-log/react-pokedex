import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './pokecard.css';

const Pokecard = (props) => {
	return (
		<section className='block'>
			<Container fluid>
				<div className="title-holder">
					<img src={'https://fontmeme.com/permalink/221219/3a93b3a770f738e70b9f89412489ef6d.png'} />
				</div>
				<Row>
					{props.pokedex.map((p) => {
						return (
							<Col sm={3} key={p.id}>
								<div className="Pokecard">
									<h4 className="Pokecard-name">{p.name}</h4>
									<img
										className="Pokecard-img"
										src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
										alt=""
									/>
									<div>
										<p>Type: {p.type}</p>
										<p>XP: {p.base_experience}</p>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Pokecard;
