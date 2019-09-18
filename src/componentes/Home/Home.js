import React, { useState, useEffect } from "react";
import unlock from "../../imagenes/undraw_security_o890.svg";
import { data as pinData } from "./pin-data";
import "./Home.css";

function Home(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pin: "",
  //     pinError: false,
  //     data: null
  //   };
  //   this.inputRef = React.createRef();
  //   this.handleChange = this.handleChange.bind(this);
  // }
  // componentDidMount() {
  //   if (!this.state.data) {
  //     this.setState({ data: pinData });
  //   }
  // }

  const inputRef = React.createRef();
  const [data, setData] = useState(null);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState(false);

  function getUserByPin(pin) {
    return (
      data.find(val => {
        return val.pin === +pin;
      }) || null
    );
  }

  useEffect(() => {
    setData(pinData);
  }, []);

  useEffect(() => {
    if (props.user !== null) {
      props.history.push("/main");
    }
  });

  // efecto para setear usuario si hay usuario con ese pin
  useEffect(() => {
    if (data) {
      const userFromPin = getUserByPin(pin);
      if (props.user === null && !!userFromPin && !pinError) {
        props.setUser(userFromPin);
      }
    }
  });

  // efecto para re-setear usuario si hay error
  useEffect(() => {
    if (!!props.user && pinError) {
      props.setUser(null);
    }
  });

  // efecto para re-setear valor de input field
  useEffect(() => {
    if (!pin && !pinError && !!props.user) {
      props.setUser(null);
      inputRef.current.value = "";
    }
  });

  // componentDidUpdate() {
  //   if (this.props.user !== null) {
  //     this.props.history.push("/main");
  //   }
  // }

  const handleChange = e => {
    const value = e.target.value;
    if (props.isAValidPin(value)) {
      setPin(value);
      setPinError(false);
      // this.setState({ pin: value, pinError: false }, () => {
      //   const user = this.getUserByPin(this.state.pin);
      //   if (this.props.user === null && !!user) {
      //     this.props.setUser(user);
      //   }
      // });
    } else if (value === "") {
      // this.setState({ pin: "", pinError: false });
      setPin("");
      setPinError(false);
    } else {
      // this.setState(
      //   { pinError: true },
      //   () => this.props.user && this.props.setUser(null)
      // );
      setPinError(true);
    }
  };

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
          onChange={handleChange}
          ref={inputRef}
          className={`md:w-2/3 h-12 font-bold text-center text-lg shadow rounded hover:bg-yellow-200 focus:outline-none
            ${pinError ? "border border-red-500" : ""}`}
          type="text"
          name="pin"
          maxLength="4"
          placeholder="****"
        />
      </div>
      {!props.user && props.isAValidPin(pin) ? (
        <small className="text-red-500 text-sm border border-red-400">
          Pin erroneo
        </small>
      ) : null}
      <div className="cancelar w-4/5 sm:w-3/4 md:w-3/6 mx-auto flex flex-col items-center  mx-auto mt-10">
        <h3 className="text-gray-800 font-sans text-center text-md sm:text-lg md:text-2xl">
          Si hay algun error oprima&nbsp;
          <span className="font-bold">Cancelar</span>
        </h3>
        <button
          onClick={() => {
            setPin("");
            inputRef.current.value = "";
            setPinError(false);
            // this.setState({ pin: "", pinError: false }, () =>
            //   this.props.setUser(null)
            // );
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

export default Home;
