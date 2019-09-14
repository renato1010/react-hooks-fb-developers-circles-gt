import React, { Component } from "react";
import Success from "../success/Success";
import Failure from "../failure/Failure";

export default class CambioPin extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
    this.pinAnteriorRef = React.createRef();
    this.pinNuevoRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.pinNuevoRef.current.value);
    console.log(prevProps.user);
    console.log(
      this.state.form.isSubmitted,
      !this.state.form.hasError,
      prevProps.user.pin
    );

    if (
      this.state.form.isSubmitted &&
      !this.state.form.hasError &&
      prevProps.user.pin !== +this.pinNuevoRef.current.value
    ) {
      console.log("ready to update user");
      const user = { ...prevProps.user, pin: +this.pinNuevoRef.current.value };
      prevProps.setUser(user);
    }
  }

  get initialState() {
    const pinAnterior = { val: "", hasError: false };
    const pinNuevo = { val: "", hasError: false };
    const hasError = false;
    const isSubmitted = false;

    return {
      form: {
        pinAnterior,
        pinNuevo,
        hasError,
        isSubmitted
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
    const form = { ...this.state.form };
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
    const isSamePin =
      this.pinAnteriorRef.current.value === this.pinNuevoRef.current.value;
    if (!form.hasError && isSamePin) {
      form.hasError = true;
    }
    form.isSubmitted = true;
    this.setState({ form });
  }

  render() {
    const {
      form: { hasError: formError, pinAnterior, pinNuevo, isSubmitted }
    } = this.state;

    return (
      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto bg-white shadow-lg border rounded overflow-hidden">
        <div className="h-full content">
          <div
            className="flex px-3 flex-col justify-center items-center"
            style={{ height: "20rem" }}
          >
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
