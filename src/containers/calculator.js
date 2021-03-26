import { Component } from "react";
import { Button } from "../components/button";
import Display from "../components/display";

class Calculator extends Component {
  // estados iniciais do hook state
  initialState = {
    firstValue: 0,
    secondValue: 0,
    operator: 1,
    operating: 0,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  //imprime valor no display utilizando state
  putValue = (value) => {
    const lastValue =
      this.state.operator === 1
        ? this.state.firstValue
        : this.state.secondValue;

    switch (this.state.operator) {
      case 1:
        this.setState({ firstValue: lastValue * 10 + value });
        break;
      case 2:
        this.setState({ secondValue: lastValue * 10 + value });
        break;
      default:
    }
  };

  //imprime resultado na tela
  getValue = () => {
    const { firstValue, secondValue, operator, operating } = this.state;

    switch (operator) {
      case 1:
        return firstValue;
      case 2:
        return secondValue;
      case 3:
        if (operating === 1) {
          return firstValue + secondValue;
        } else if (operating === 2) {
          return firstValue - secondValue;
        } else if (operating === 3) {
          return firstValue * secondValue;
        } else if (operating === 4) {
          if (firstValue === 0 || secondValue === 0) {
            return "ERRRO";
          } else {
            return firstValue / secondValue;
          }
        } else {
          return Math.sqrt(firstValue);
        }
      default:
        return "Nemhum operador definido";
    }
  };

  //obtem qual será o operando
  pickOperator = (operating) => {
    if (operating === 5) {
      this.execOperation();
    } else {
      this.setState({ operator: 2, operating: operating });
    }
  };

  //muda o estado para executar a operação
  execOperation = () => {
    this.setState({ operator: 3 });
  };

  clear = () => {
    this.setState(this.initialState);
  };

  render() {
    const { operator } = this.state;

    return (
      <div className={"calculator"}>
        <Display value={this.getValue()} />
        <div className={"NumbersbuttonsContainers"}>
          <div>
            <Button
              display={"+"}
              onClick={() => this.pickOperator(1)}
              kind={"operating"}
            />
            <Button
              display={"7"}
              onClick={() => this.putValue(7)}
              kind={"number"}
            />
            <Button
              display={"4"}
              onClick={() => this.putValue(4)}
              kind={"number"}
            />
            <Button
              display={"1"}
              onClick={() => this.putValue(1)}
              kind={"number"}
            />
            <Button
              display={"0"}
              onClick={() => this.putValue(0)}
              kind={"number"}
            />
          </div>
          <div>
            <Button
              display={"-"}
              onClick={() => this.pickOperator(2)}
              kind={"operating"}
            />
            <Button
              display={"8"}
              onClick={() => this.putValue(8)}
              kind={"number"}
            />
            <Button
              display={"5"}
              onClick={() => this.putValue(5)}
              kind={"number"}
            />
            <Button
              display={"2"}
              onClick={() => this.putValue(2)}
              kind={"number"}
            />
            <Button
              display={"."}
              onClick={() => this.putValue(".")}
              kind={"number"}
            />
          </div>
          <div>
            <Button
              display={"x"}
              onClick={() => this.pickOperator(3)}
              kind={"operating"}
              disabled={operator !== 1}
            />
            <Button
              display={"9"}
              onClick={() => this.putValue(9)}
              kind={"number"}
            />
            <Button
              display={"6"}
              onClick={() => this.putValue(6)}
              kind={"number"}
            />
            <Button
              display={"3"}
              onClick={() => this.putValue(1)}
              kind={"number"}
            />
            <Button
              display={"c"}
              onClick={() => this.clear()}
              kind={"number"}
            />
          </div>
          <div>
            <Button
              display={"/"}
              kind={"operating"}
              onClick={() => this.pickOperator(4)}
            />
            <Button
              kind={"operating"}
              display={"V2"}
              onClick={() => this.pickOperator(5)}
            />
            <Button
              kind={"icos"}
              display={"="}
              onClick={() => this.execOperation()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
