import React, {Component} from 'react';
import unlock from '../imagenes/undraw_security_o890.svg';
import './App.css';

class Home extends Component {
	render() {
		return (
			<div className="container flex flex-col my-20 mx-auto sm:mt-10 App">
				<div
					className="controls bg-gray-200 m-4 w-4/5 sm:w-3/4 md:w-3/6 mx-auto flex
      flex-col md:flex-row md:items-center rounded"
				>
					<label
						className="md:w-1/3 h-6 text-gray-700 md:text-base lg:text-lg font-bold mb-4 md:m-0"
						htmlFor="pin"
					>
						Ingrese su PIN:
					</label>
					<input
						className="md:w-2/3 h-12 tracking-widest font-bold text-center text-lg shadow
          border-gray-400 rounded hover:border-none hover:bg-yellow-200 w-full"
						type="text"
						name="pin"
						maxLength="4"
						placeholder="****"
					/>
				</div>
				<div className="cancelar w-4/5 sm:w-3/4 md:w-3/6 mx-auto flex flex-col items-center  mx-auto mt-10">
					<h3 className="text-gray-800 font-sans text-center text-md sm:text-lg md:text-2xl">
						Si hay algun error oprima <span className="font-bold">Cancelar</span>
					</h3>
					<button
						className="w-4/5 sm:w-2/5 h-10 my-4 bg-red-400 hover:bg-red-700 text-2xl
        font-bold px-6 rounded align-middle"
					>
						Cancelar
					</button>
				</div>
				<img className="w-4/5 sm:w-3/4 md:w-3/6 mx-auto" src={unlock} alt="lock" />
			</div>
		);
	}
}


export default Home;
