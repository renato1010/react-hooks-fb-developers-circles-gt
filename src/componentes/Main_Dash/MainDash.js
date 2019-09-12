import React, { Component } from "react";
import "./MainDash.css";

class MainDash extends Component {
  render() {
    return (
      <div className="Page">
        <div className="container flex items-center my-auto mx-auto sm:mt-10 border border-gray-500 MainDash">
          <div className="h-full bg-gray-200 w-1/4 md:w-1/6 flex flex-col controls-left">
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Consulta de Saldos</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="consultar saldo">
                  🏧
                </span>
              </div>
            </div>
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Transferencias</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="transferencia">
                  💸
                </span>
              </div>
            </div>
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Compra de Moneda</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="compra de moneda">
                  💱
                </span>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2 md:w-2/3 dash-center">dash-center</div>
          <div className="h-full bg-gray-200 w-1/4 md:w-1/6 flex flex-col controls-right">
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Retiro de Efectivo</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="retiro de efectivo">
                  🇶
                </span>
              </div>
            </div>
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Cambio de Pin</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="cambio de pin">
                  🔢
                </span>
              </div>
            </div>
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Otras Operaciones</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="otras operaciones">
                  ⚙️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDash;
