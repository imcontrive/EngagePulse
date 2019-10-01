import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ClearButton } from "./ClearButton";
import { evaluate, sqrt } from "mathjs";
import "../calculator.css";

export default class Display extends Component {
  state = {
    input: "",
    darkMode: false,
    signMode: false,
    arg1: "",
    opt: "",
    arg2: ""
  };
  componentDidMount() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    if (savedMode) {
      this.setState({ darkMode: savedMode });
    }
  }

  isDigit(n) {
    return !isNaN(Number(n));
  }

  addToInput = val => {
    const { arg1, opt, arg2 } = this.state;
    val = String(val);
    if (!arg1) {
      this.setState({ arg1: val }, () => this.displayInp());
      return;
    }
    if (arg1 && !opt) {
      if (this.isDigit(val)) {
        this.setState({ arg1: this.state.arg1 + val }, () => this.displayInp());
      } else {
        this.setState({ opt: val }, () => this.displayInp());
      }
      return;
    }
    if (arg1 && opt && !arg2) {
      if (this.isDigit(val)) {
        this.setState({ arg2: val }, () => this.displayInp());
      } else {
        this.setState({ opt: val }, () => this.displayInp());
      }
    }
    if (arg1 && opt && arg2) {
      if (this.isDigit(val)) {
        this.setState({ arg2: this.state.arg2 + val }, () => this.displayInp());
      } else {
        this.setState(
          {
            opt: val,
            arg1: String(evaluate(`${arg1}${opt}${arg2}`)),
            arg2: ""
          },
          () => this.displayInp()
        );
      }
    }
  };

  displayInp = () => {
    const { arg1, arg2 } = this.state;
    if (arg2) {
      this.setState({ input: this.state.arg2 });
    }
    if (!arg2 && arg1) {
      this.setState({ input: this.state.arg1 });
    }
    if (!arg2 && !arg1) {
      this.setState({ input: "0" });
    }
  };

  handleEqual = () => {
    const { arg1, opt, arg2 } = this.state;

    if (arg2) {
      this.setState(
        {
          arg1: String(evaluate(`${arg1}${opt}${arg2}`)),
          arg2: ""
        },
        () => this.displayInp()
      );
    }
    if (!arg2 && arg1) {
      this.setState({ opt: "" }, () => this.displayInp());
    }
  };

  setDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
    localStorage.setItem("dark", JSON.stringify(!this.state.darkMode));
  };
  setSignMode = () => {
    this.setState({ signMode: !this.state.signMode });
  };

  processPlusMinusToggle = () => {
    const { input } = this.state;
    if (input) {
      const newData = parseFloat(input) * -1;
      this.setState({ arg1: String(newData) }, () => this.displayInp());
    }
  };

  processPoint = () => {
    const { input } = this.state;
    var dot = ".";
    if (input && !input.includes(dot)) {
      const newData = String(input + ".");
      if (this.state.arg2) {
        this.setState({ arg2: String(newData) }, () => this.displayInp());
      } else {
        this.setState({ arg1: String(newData) }, () => this.displayInp());
      }
    }
  };
  processSquareRoot = () => {
    const { input } = this.state;
    if (input) {
      const newData = sqrt(input);
      this.setState({ arg1: String(newData) }, () => this.displayInp());
    }
  };
  processSquare = () => {
    const { input } = this.state;
    if (input) {
      const newData = input * input;
      console.log(newData, "new Sq");
      this.setState({ arg1: String(newData) }, () => this.displayInp());
    }
  };
  processUnknownKey = val => {
    console.error("processUnknownKey", val);
  };
  //Logic for scientific Mode
  processFunctionKey(val) {
    switch (val) {
      case "±":
        this.processPlusMinusToggle(val);
        break;
      case ".":
        this.processPoint();
        break;
      case "X2":
        this.processSquare();
        break;
      case "√":
        this.processSquareRoot();
        break;
      default:
        this.processUnknownKey(val);
    }
  }

  render() {
    const { darkMode } = this.state;
    const isNormal = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*"];
    const signModeArr = ["±", ".", "√", "X2"];
    return (
      <div className={`${darkMode ? " is-parant-wrapper dark" : "light"}`}>
        <div className="wrapper">
          <h3 className="is-heading">Simple Calculator</h3>
          <div className="is-calcWrapper">
            <div className="is-theme-btns">
              <button
                className={darkMode ? "sign-mode btn light" : "sign-mode btn"}
                onClick={() => this.setSignMode()}
              >
                Scientific Mode
              </button>
              <span>
                <button
                  className={darkMode ? "btn active dark" : "btn light"}
                  type="submit"
                  onClick={() => this.setDarkMode()}
                >
                  {!darkMode ? "Dark Theme" : "Light Mode"}
                </button>
              </span>
            </div>
            <div className="calc-wrapper">
              <Input
                theme={darkMode ? "dark-mode" : "light-mode"}
                input={this.state.input}
              />
              <div className="row box">
                {isNormal.map(val => (
                  <Button
                    key={val}
                    theme={darkMode ? "dark-mode" : "light-mode"}
                    handleClick={this.addToInput}
                  >
                    {val}
                  </Button>
                ))}
              </div>
              <div className="row">
                {this.state.signMode
                  ? signModeArr.map((val, i) => (
                      <Button
                        key={val}
                        theme={darkMode ? "dark-mode" : "light-mode"}
                        handleClick={() => this.processFunctionKey(val)}
                      >
                        {val}
                      </Button>
                    ))
                  : ""}
              </div>
              <div className="row">
                <ClearButton
                  theme={darkMode ? "dark-mode" : "light-mode"}
                  handleClear={() =>
                    this.setState({ input: "", arg1: "", arg2: "", opt: "" })
                  }
                >
                  AC
                </ClearButton>
                <Button
                  theme={darkMode ? "dark-mode" : "light-mode"}
                  handleClick={this.addToInput}
                >
                  0
                </Button>
                <Button
                  theme={darkMode ? "dark-mode" : "light-mode"}
                  handleClick={() => this.handleEqual()}
                >
                  =
                </Button>
                <Button
                  theme={darkMode ? "dark-mode" : "light-mode"}
                  handleClick={this.addToInput}
                >
                  /
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
