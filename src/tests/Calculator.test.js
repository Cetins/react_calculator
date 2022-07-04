import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const addButton = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('should substract numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should multiply numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('should divide numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const button9 = container.getByTestId('number9');
    fireEvent.click(button7);
    fireEvent.click(button4);
    fireEvent.click(button9);
    expect(runningTotal.textContent).toEqual('749');
  })

  it('should chain multiple operations together, 7*4-2+5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button4 = container.getByTestId('number4');
    const subtractButton = container.getByTestId('operator-subtract');
    const button2 = container.getByTestId('number2');
    const addButton = container.getByTestId('operator-add');
    const button5 = container.getByTestId('number5');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(multiplyButton);
    fireEvent.click(button4);
    fireEvent.click(subtractButton);
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('31');
  })

  it('should clear the running total without affecting the calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button0 = container.getByTestId('number0');
    const addButton = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const button5 = container.getByTestId('number5');
    const equalButton = container.getByTestId('operator-equals');
    const clearButton = container.getByTestId('clear');
    const subtractButton = container.getByTestId('operator-subtract');
    fireEvent.click(button2);
    fireEvent.click(button0);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(button5);
    fireEvent.click(equalButton);
    fireEvent.click(addButton);
    fireEvent.click(button5);
    fireEvent.click(clearButton);
    fireEvent.click(subtractButton);
    fireEvent.click(button1);
    fireEvent.click(button0);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('25');
  })
})

