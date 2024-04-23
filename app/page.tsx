import CreateSessionForm from "./createSessionForm";
import db from "@/db/db";

export default async function Home() {
  const sessions = await db.session.findMany();
  console.log(sessions);
  return (
    <div>
      <h1>Create session</h1>
      <CreateSessionForm />
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Qr code</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.id}</td>
              <td>{session.sessionName}</td>
              <td>
                <img src={`/qr_codes/${session.qrCodeImagePath}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
