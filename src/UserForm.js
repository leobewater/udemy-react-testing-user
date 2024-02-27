import { useState } from "react";
function UserForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <form>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
