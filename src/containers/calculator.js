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
      console.log("passei aqui!");
      this.execOperation();
    } else {
      console.log("passei aqui 2!");
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
        <div>
          <Display value={this.getValue()} />
        </div>
        <div className={"buttonsContainers"}>
          <Button
            display={"1"}
            onClick={() => this.putValue(1)}
            disabled={operator === 3}
          />
          <Button
            display={"2"}
            onClick={() => this.putValue(2)}
            disabled={operator === 3}
          />
          <Button
            display={"3"}
            onClick={() => this.putValue(3)}
            disabled={operator === 3}
          />
          <Button
            display={"4"}
            onClick={() => this.putValue(4)}
            disabled={operator === 3}
          />
          <Button
            display={"5"}
            onClick={() => this.putValue(5)}
            disabled={operator === 3}
          />
          <Button
            display={"6"}
            onClick={() => this.putValue(6)}
            disabled={operator === 3}
          />
          <Button
            display={"7"}
            onClick={() => this.putValue(7)}
            disabled={operator === 3}
          />
          <Button
            display={"8"}
            onClick={() => this.putValue(8)}
            disabled={operator === 3}
          />
          <Button
            display={"9"}
            onClick={() => this.putValue(9)}
            disabled={operator === 3}
          />
          <Button
            display={"0"}
            onClick={() => this.putValue(0)}
            disabled={operator === 3}
          />
          <Button
            display={"+"}
            onClick={() => this.pickOperator(1)}
            disabled={operator !== 1}
          />
          <Button
            display={"-"}
            onClick={() => this.pickOperator(2)}
            disabled={operator !== 1}
          />
          <Button
            display={"x"}
            onClick={() => this.pickOperator(3)}
            disabled={operator !== 1}
          />
          <Button
            display={"/"}
            onClick={() => this.pickOperator(4)}
            disabled={operator !== 1}
          />
          <Button
            display={"V2"}
            onClick={() => this.pickOperator(5)}
            disabled={operator !== 1}
          />
          <Button
            display={"="}
            onClick={() => this.execOperation()}
            disabled={false}
          />
          <Button display={"c"} onClick={() => this.clear()} />
        </div>
      </div>
    );
  }
}

export default Calculator;
