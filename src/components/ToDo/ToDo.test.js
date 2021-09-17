import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToDo from './index';

describe('ToDo Tests', () => {
  let addBtn, input;

  beforeEach(() => {
    render(<ToDo />)
    addBtn = screen.getByText("Add")
    input = screen.getByPlaceholderText("ToDo")
  })

  test("Default items test", () => {
    const items = screen.getAllByText(/Item/i)
    expect(items.length).toEqual(3)
  })

  test("Button and input render test", () => {
    expect(addBtn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  test("When click to add button items should be add to the list", () => {
    // fill the input
    const name = "Fuat"
    userEvent.type(input, name)

    // click the Button
    userEvent.click(addBtn)

    // assertion
    expect(screen.getByText(name)).toBeInTheDocument()
  })





})