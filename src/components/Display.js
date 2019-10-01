import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ClearButton } from "./ClearButton";
import { evaluate } from "mathjs";
import "../calculator.css";

export default class Display extends Component {
  state = {
    input: "",
    style: ""
  };

  // add to Input
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  // HandleEqual
  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  };

  // Logic for Themes
  themeHandler = str => {
    console.log(str);
  };

  render() {
    const isNormal = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*"];
    return (
      <div className="isParentWrapper">
        <h3 className="isHeading">Simple Calculator</h3>
        <div className="isCalcWrapper">
          <div className="isThemeBtns">
            <button
              className="btn"
              type="submit"
              onClick={() => this.themeHandler("light")}
            >
              Light Theme
            </button>
            <button
              className="btn"
              type="submit"
              onClick={() => this.themeHandler("dark")}
            >
              Dark Theme
            </button>
          </div>
          <div className="calc-wrapper">
            <Input input={this.state.input} />
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>*</Button>
            </div>

            {/* <div className="row">
            {isNormal.map(val => (
              <Button className="box" key={val} handleClick={this.addToInput}>
                {val}
              </Button>
            ))}
          </div> */}

            <div className="row">
              <ClearButton handleClear={() => this.setState({ input: "" })}>
                AC
              </ClearButton>
              {/* <Button handleClick={this.addToInput}>.</Button> */}
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={() => this.handleEqual()}>=</Button>
              <Button handleClick={this.addToInput}>/</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
