import { render, screen, within } from "@testing-library/react";
import { UserList } from "./UserList";

test("render one row per user", () => {
  // Render the components
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  const { container } = render(<UserList users={users} />);

  // use the online ide to run test playround
  // screen.logTestingPlaygroundURL();
 
  // const table = container.querySelector("table");
  // console.log(table);

  // Find all the rows in the table by testid
  // const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Find all rows with querySelector
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
