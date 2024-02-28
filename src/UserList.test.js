import { render, screen, within } from "@testing-library/react";
import { UserList } from "./UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  render(<UserList users={users} />);

  return {
    users,
  };
}

test("render one row per user", () => {
  // Render the components
  renderComponent();

  // ****** use the online ide to run test playround ****************
  // screen.logTestingPlaygroundURL();

  // const table = container.querySelector("table");
  // console.log(table);

  // Find all the rows in the table by testid
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Find all rows with querySelector
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // Render the components
  const { users } = renderComponent();

  // Find all the rows in the table by testid
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
