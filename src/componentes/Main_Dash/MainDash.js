import React, { Component } from "react";
import Saldo from "../Saldo";
import "./MainDash.css";
import CambioPin from "../cambio-pin/CambioPin";

class MainDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentToShow: null
    };
    !this.props.user && this.props.history.push("./");
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(cmp) {
    this.setState({ componentToShow: cmp });
  }

  componentSwitcher() {
    switch (this.state.componentToShow) {
      case "saldo":
        return <Saldo {...this.props} />;
      case "cambio-pin":
        return (
          <CambioPin
            setUser={this.props.setUser}
            user={this.props.user}
            isAValidPin={this.props.isAValidPin}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="Page">
        <div className="container flex items-center my-auto mx-auto sm:mt-10 border border-gray-500 MainDash">
          <div className="h-full bg-gray-200 w-1/4 md:w-1/6 flex flex-col controls-left">
            <div
              onClick={() => this.handleClick("saldo")}
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
          <div className="h-full w-1/2 md:w-2/3 bg-gray-300 dash-center flex items-center justify-center">
            {this.componentSwitcher()}
          </div>
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
              onClick={() => this.handleClick("cambio-pin")}
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
