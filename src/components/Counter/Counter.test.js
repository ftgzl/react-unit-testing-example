import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index';

describe('Counter Tests', () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("Her testten önce çalışır.");
    render(<Counter />)
    increaseBtn = screen.getByText("Increase")
    decreaseBtn = screen.getByText("Decrease")
    count = screen.getByText("0")
  })

  beforeAll(() => {
    console.log("İlk başta bir kere çalışır.");
  })

  afterAll(() => {
    console.log("En son bir kere çalışır.");
  })

  afterEach(() => {
    console.log("Her testten sonra çalışır.");
  })

  test('increase btn', () => {
    userEvent.click(increaseBtn)
    expect(count).toHaveTextContent("1")
  })
  
  test('decrease btn', () => {
    userEvent.click(decreaseBtn)
    expect(count).toHaveTextContent("-1")
  })

})