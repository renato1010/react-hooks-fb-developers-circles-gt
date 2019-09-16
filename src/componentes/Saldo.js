import React, { Component } from "react";

class Saldo extends Component {
  render() {
    const formatter = new Intl.NumberFormat("es-GT", {
      style: "currency",
      currency: "GTQ",
      minimumFractionDigits: 2
    });
    const guateDate = new Intl.DateTimeFormat("es-GT", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    const guateTime = new Intl.DateTimeFormat("es-GT", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "America/Guatemala"
    });
    const {
      user: { saldo = 1000 }
    } = this.props;
    return (
      <div className="w-4/5 lg:max-w-md bg-white shadow-lg border rounded overflow-hidden">
        <div className="h-full content">
          <div className="h-40 bg-indigo-200 flex justify-center items-center">
            <div className="font-mono text-2xl sm:text-3xl lg:text-5xl tracking-wider text-indigo-900 font-bold number">
              {formatter.format(saldo)}
            </div>
          </div>
          <div className="h-64 flex px-3 flex-col justify-center items-center">
            <div className="text-md text-center sm:text-lg lg:text-2xl capitalize text-gray-800">
              {guateDate.format(new Date().getTime())}
            </div>
            <div className="mt-4 text-md sm:text-lg lg:text-2xl tracking-wider text-gray-800">
              {guateTime.format(new Date().getTime())}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Saldo;
