import React, { Component } from "react";
import unlock from "../../imagenes/undraw_security_o890.svg";
import { data as pinData } from "./pin-data";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: "",
      pinError: false,
      user: null
    };
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    if (this.isAValidPin(value)) {
      this.setState({ pin: value, pinError: false });
    } else if (value === "") {
      this.setState({ pin: "", pinError: false });
    } else {
      this.setState({ pinError: true, user: null });
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.isAValidPin(this.state.pin)) {
      const user = this.getUserByPin(this.state.pin);
      if (prevState.user === null && !!user) {
        this.setState({ user });
      }
    }
  }

  isAValidPin = pin => /\d{4}/.test(pin);
  getUserByPin = pin => {
    return (
      pinData.find(val => {
        return val.pin === +pin;
      }) || null
    );
  };

  render() {
    return (
      <div className="container flex flex-col items-center my-20 mx-auto sm:mt-10 App">
        <div
          className="controls-left bg-gray-200 m-4 w-4/5 sm:w-3/4 md:w-3/6 mx-auto flex
            flex-col md:flex-row md:items-center rounded"
        >
          <label
            className="md:w-1/3 h-6 text-gray-700 md:text-base lg:text-lg font-bold mb-4 md:m-0"
            htmlFor="pin"
          >
            Ingrese su PIN:
          </label>
          <input
            onChange={this.handleChange}
            ref={this.inputRef}
            className={`md:w-2/3 h-12 font-bold text-center text-lg shadow rounded hover:bg-yellow-200 focus:outline-none
            ${this.state.pinError ? "border border-red-500" : ""}`}
            type="text"
            name="pin"
            maxLength="4"
            placeholder="****"
          />
        </div>
        {!this.state.user && this.isAValidPin(this.state.pin) ? (
          <small className="text-red-500 text-sm border border-red-400">
            Usuario no encontrado
          </small>
        ) : (
          ""
        )}
        <div className="cancelar w-4/5 sm:w-3/4 md:w-3/6 mx-auto flex flex-col items-center  mx-auto mt-10">
          <h3 className="text-gray-800 font-sans text-center text-md sm:text-lg md:text-2xl">
            Si hay algun error oprima&nbsp;
            <span className="font-bold">Cancelar</span>
          </h3>
          <button
            onClick={() => {
              this.setState({ pin: "", pinError: false });
              this.inputRef.current.value = "";
            }}
            className="w-4/5 sm:w-2/5 h-10 my-4 bg-red-400 hover:bg-red-700 text-2xl
              font-bold px-6 rounded align-middle"
          >
            Cancelar
          </button>
        </div>
        <img
          className="w-4/5 sm:w-3/4 md:w-3/6 mx-auto"
          src={unlock}
          alt="lock"
        />
      </div>
    );
  }
}

export default Home;
