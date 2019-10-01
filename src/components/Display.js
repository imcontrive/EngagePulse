import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ClearButton } from "./ClearButton";
import { evaluate } from "mathjs";
import "../calculator.css";

export default class Display extends Component {
  state = {
    input: "",
    style: "",
    darkMode: false
  };

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  };

  setDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
    localStorage.setItem("dark", JSON.stringify(!this.state.darkMode));
  };

  render() {
    const { darkMode } = this.state;
    const isNormal = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*"];
    const themes = ["Light Theme", "Dark Theme"];
    return (
      <div className={`${darkMode ? " is-parant-wrapper dark" : "light"}`}>
        <div className="wrapper">
          <h3 className="is-heading">Simple Calculator</h3>
          <div className="is-calcWrapper">
            <div className="is-theme-btns">
              {themes.map((theme, i) => (
                <button
                  className={
                    darkMode && theme === "Dark Theme" ? "btn active" : "btn"
                  }
                  key={i}
                  type="submit"
                  onClick={() => this.setDarkMode()}
                >
                  {theme}
                </button>
              ))}
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
                <ClearButton
                  theme={darkMode ? "dark-mode" : "light-mode"}
                  handleClear={() => this.setState({ input: "" })}
                >
                  AC
                </ClearButton>
                {/* <Button handleClick={this.addToInput}>.</Button> */}
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
