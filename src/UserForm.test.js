import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

/*
// NOT THE BEST IMPLEMENTATION
test("it calls onUserAdd when the form is submitted", () => {
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };
  
  render(<UserForm onUserAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  // Find the button
  const button = screen.getByRole("button");
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "jane", email: "jane@jane.com" });
});
*/


// use mock function
test("it calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  // Find the button
  const button = screen.getByRole("button");
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
