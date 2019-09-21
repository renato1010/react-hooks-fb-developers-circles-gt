import React, { Component } from "react";
import Success from "../success/Success";
import Failure from "../failure/Failure";

class CambioPin extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.pinAnteriorRef = React.createRef();
    this.pinNuevoRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.form.isSubmitted &&
      !this.state.form.hasError &&
      prevProps.user.pin !== +this.pinNuevoRef.current.value
    ) {
      const user = { ...prevProps.user, pin: +this.pinNuevoRef.current.value };
      prevProps.setUser(user);
    }
    if (
      this.props.user.pin === +this.pinNuevoRef.current.value &&
      !this.state.form.hasError
    ) {
      console.log("changing location");
      setTimeout(
        () =>
          this.props.history.push({
            pathname: "/",
            state: { user: this.props.user }
          }),
        1000
      );
    }
  }

  get initialState() {
    const pinAnterior = { val: "", hasError: false };
    const pinNuevo = { val: "", hasError: false };
    const hasError = false;
    const isSubmitted = false;
    const pinError = { status: false, messages: [] };

    return {
      form: {
        pinAnterior,
        pinNuevo,
        hasError,
        isSubmitted,
        pinError
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // reset state if was previously submitted
    if (this.state.form.isSubmitted) {
      console.log("re-submission");
      const resetForm = {
        ...this.initialState.form,
        isSubmitted: true,
        hasError: false
      };
      this.setState({ form: resetForm }, () => this.checkSubmission());
    } else {
      this.checkSubmission();
    }
  }

  checkSubmission() {
    let form = { ...this.state.form };
    form = this.validatePinValues(form);
    form = this.validatePinReferences(form);
    form.isSubmitted = true;
    this.setState({ form });
  }

  validatePinValues(form) {
    [this.pinAnteriorRef, this.pinNuevoRef].forEach((ref, i) => {
      if (!this.props.isAValidPin(ref.current.value)) {
        if (i === 0) {
          form.pinAnterior.hasError = true;
          form.hasError = true;
        } else {
          form.pinNuevo.hasError = true;
          form.hasError = true;
        }
      }
    });
    return form;
  }

  validatePinReferences(form) {
    const isSamePin =
      this.pinAnteriorRef.current.value === this.pinNuevoRef.current.value;
    const pinAnteriorIsOk =
      this.props.user.pin === +this.pinAnteriorRef.current.value;
    if (isSamePin) {
      form.hasError = true;
      form.pinError.status = true;
      form.pinError.messages.push(
        "Pin anterior y Pin nuevo no pueden ser iguales"
      );
    }
    if (!pinAnteriorIsOk) {
      form.hasError = true;
      form.pinError.status = true;
      form.pinError.messages.push("Pin anterior incorrecto");
    }
    return form;
  }

  render() {
    const {
      form: { hasError: formError, pinAnterior, pinNuevo, isSubmitted }
    } = this.state;
    const pinErrorMsgs = (
      <ul>
        {this.state.form.pinError.messages.map((error, i) => (
          <li className="text-xs text-red-500" key={i}>
            {error}
          </li>
        ))}
      </ul>
    );

    return (
      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto bg-white shadow-lg border rounded overflow-hidden">
        <div className="h-full content">
          <div
            className="flex px-3 flex-col justify-center items-center"
            style={{ height: "22rem" }}
          >
            {this.state.form.pinError.status ? pinErrorMsgs : null}
            <form className="w-full p-2 flex flex-col justify-between items-start">
              <label
                className="w-full h-6 text-gray-700 font-bold mb-4"
                htmlFor="pinAnterior"
              >
                Ingrese el PIN Anterior:
              </label>
              <input
                ref={this.pinAnteriorRef}
                className={`w-full h-12 font-bold text-center text-lg shadow rounded hover:bg-yellow-200 focus:outline-none 
                ${pinAnterior.hasError ? "border border-red-500" : ""}`}
                style={{ letterSpacing: "4ch" }}
                type="text"
                name="pinAnterior"
                maxLength="4"
                placeholder="****"
              />
              <label
                className="w-full h-6 mt-4 text-gray-700 font-bold mb-4"
                htmlFor="pinNuevo"
              >
                Ingrese el PIN Nuevo:
              </label>
              <input
                ref={this.pinNuevoRef}
                className={`w-full h-12 font-bold text-center text-lg shadow rounded hover:bg-yellow-200 focus:outline-none
                ${pinNuevo.hasError ? "border border-red-500" : ""}`}
                style={{ letterSpacing: "4ch" }}
                type="text"
                name="pinNuevo"
                maxLength="4"
                placeholder="****"
              />
              <button
                onClick={this.handleSubmit}
                className="w-40 h-10 rounded-sm mt-6 self-center bg-green-500 text-xl text-white font-bold"
              >
                Cambiar PIN
              </button>
            </form>
          </div>
          <div className="h-16 bg-indigo-200 flex justify-center items-center">
            <div className="font-sans text-lg lg:text-2xl tracking-wider text-indigo-900 font-bold number">
              Cambio de Pin
            </div>
            <div className="ml-2">
              {isSubmitted ? formError ? <Failure /> : <Success /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CambioPin;
