import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Saldo from "../Saldo";
import "./MainDash.css";
import CambioPin from "../cambio-pin/CambioPin";

class MainDash extends Component {
  constructor(props) {
    super(props);
    this.props.user === null && this.redirectToHome();
  }

  redirectToHome = () => {
    console.log("redirecting to home");
    this.props.history.push("/");
  };

  render() {
    const { match } = this.props;
    return (
      <div className="Page">
        <div className="container flex items-center my-auto mx-auto sm:mt-10 border border-gray-500 MainDash">
          <div className="h-full bg-gray-200 w-1/4 md:w-1/6 flex flex-col controls-left">
            <Link
              to={`${match.url}/saldo`}
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white font-bold py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Consulta de Saldos</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="consultar saldo">
                  🏧
                </span>
              </div>
            </Link>
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
          <div className="h-full w-1/2 md:w-2/3 bg-gray-300 dash-center flex items-center justify-center">
            <Route
              path={`${match.url}/saldo`}
              render={rp => {
                return <Saldo {...this.props} {...rp} />;
              }}
            />
            <Route
              path={`${match.url}/cambio-pin`}
              render={rp => <CambioPin {...this.props} {...rp} />}
            />
            <Route
              exact
              path="/main/"
              render={rp => {
                return <h3>Seleccione una Opcion</h3>;
              }}
            />
          </div>
          <div className="h-full bg-gray-200 w-1/4 md:w-1/6 flex flex-col controls-right">
            <div
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white
              py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500
              rounded"
            >
              <h3 className="text-sm md:text-lg">Retiro de Efectivo</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="retiro de efectivo">
                  🇶
                </span>
              </div>
            </div>
            <Link
              to={`${match.path}/cambio-pin`}
              className="flex33 bg-indigo-300 hover:bg-indigo-500 text-white py-2
	            px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
            >
              <h3 className="text-sm md:text-lg">Cambio de Pin</h3>
              <div className="emoji-icon">
                <span role="img" aria-label="cambio de pin">
                  🔢
                </span>
              </div>
            </Link>
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
