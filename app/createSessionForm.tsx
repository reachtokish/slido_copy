"use client";

import { createSession } from "./actions";

export default function CreateSessionForm() {
  return (
    <form action={createSession}>
      <label>Session name</label>
      <br />
      <input type="text" name="sessionName" />
      <br />
      <button>Create session</button>
    </form>
  );
}
