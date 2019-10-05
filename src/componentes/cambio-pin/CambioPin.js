import React, { useEffect, useState, useContext } from "react";
import Success from "../success/Success";
import Failure from "../failure/Failure";
import { UserContext } from "../../contexts/user.context";

function CambioPin(props) {
  // constructor(props) {
  //   super(props);

  //   this.state = this.initialState;
  //   this.pinAnteriorRef = React.createRef();
  //   this.pinNuevoRef = React.createRef();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const { history } = props;
  const { user, changeUser } = useContext(UserContext);
  const [form, setForm] = useState(initialState());

  const pinAnteriorRef = React.createRef();
  const pinNuevoRef = React.createRef();

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.state.form.isSubmitted &&
  //     !this.state.form.hasError &&
  //     prevProps.user.pin !== +this.pinNuevoRef.current.value
  //   ) {
  //     const user = { ...prevProps.user, pin: +this.pinNuevoRef.current.value };
  //     prevProps.setUser(user);
  //   }
  //   if (this.props.user.pin === +this.pinNuevoRef.current.value) {
  //     console.log("changing location");
  //     setTimeout(
  //       () =>
  //         this.props.history.push({
  //           pathname: "/",
  //           state: { user: this.props.user }
  //         }),
  //       1000
  //     );
  //   }
  // }

  // efecto para actualizar el usuario (pin nuevo)
  useEffect(() => {
    if (
      form.isSubmitted &&
      !form.hasError &&
      user.pin !== +pinNuevoRef.current.value
    ) {
      const newUser = { ...user, pin: +pinNuevoRef.current.value };
      changeUser(newUser);
      console.log("changing location");
      setTimeout(() => history.goBack(), 1000);
    }
  });

  function initialState() {
    const pinAnterior = { val: "", hasError: false };
    const pinNuevo = { val: "", hasError: false };
    const hasError = false;
    const isSubmitted = false;
    const pinError = { status: false, messages: [] };

    return {
      pinAnterior,
      pinNuevo,
      hasError,
      isSubmitted,
      pinError
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    // reset state if was previously submitted
    if (form.isSubmitted && form.hasError) {
      console.log("re-submission");
      const resetForm = {
        ...initialState(),
        isSubmitted: true
      };
      checkSubmission(resetForm);
      // this.setState({ form: resetForm }, () => this.checkSubmission());
    }
    if (!form.hasError) {
      checkSubmission(form);
    }
  }

  function checkSubmission(formObj = form) {
    let newForm = { ...formObj };
    newForm = validatePinValues(newForm);
    newForm = validatePinReferences(newForm);
    newForm.isSubmitted = true;
    setForm(newForm);
  }

  function validatePinValues(form) {
    [pinAnteriorRef, pinNuevoRef].forEach((ref, i) => {
      if (!props.isAValidPin(ref.current.value)) {
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

  function validatePinReferences(form) {
    const isSamePin =
      +pinAnteriorRef.current.value === +pinNuevoRef.current.value;
    const pinAnteriorIsOk = user.pin === +pinAnteriorRef.current.value;
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

  // const {
  //   form: { hasError: formError, pinAnterior, pinNuevo, isSubmitted }
  // } = this.state;
  const {
    hasError: formError,
    pinAnterior,
    pinNuevo,
    isSubmitted,
    pinError
  } = form;
  const pinErrorMsgs = !!pinError && (
    <ul>
      {pinError.messages.map((error, i) => (
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
          {!!pinError && pinError.status ? pinErrorMsgs : null}
          <form className="w-full p-2 flex flex-col justify-between items-start">
            <label
              className="w-full h-6 text-gray-700 font-bold mb-4"
              htmlFor="pinAnterior"
            >
              Ingrese el PIN Anterior:
            </label>
            <input
              ref={pinAnteriorRef}
              className={`w-full h-12 font-bold text-center text-lg shadow rounded hover:bg-yellow-200 focus:outline-none 
                ${
                  !!pinAnterior && pinAnterior.hasError
                    ? "border border-red-500"
                    : ""
                }`}
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
              ref={pinNuevoRef}
              className={`w-full h-12 font-bold text-center text-lg shadow rounded hover:bg-yellow-200 focus:outline-none
                ${
                  !!pinNuevo && pinNuevo.hasError ? "border border-red-500" : ""
                }`}
              style={{ letterSpacing: "4ch" }}
              type="text"
              name="pinNuevo"
              maxLength="4"
              placeholder="****"
            />
            <button
              onClick={handleSubmit}
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

export default CambioPin;
