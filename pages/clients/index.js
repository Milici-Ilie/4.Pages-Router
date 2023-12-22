import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "mci-ilie", name: "Milici Ilie" },
    { id: "mci-roxana", name: "Milici Roxana" },
    { id: "mci-luca", name: "Milici Luca" },
    { id: "mci-david", name: "Milici David" },
  ];

  return (
    <div>
      <h1>The Clients Page!</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      {/* 🔗🔗[LINK NAVIGATION]🔗🔗 ❗❗NOTE❗❗ here we created a dynamic list, where the "mci-ilie", "mci-roxana", etc will connect auttomatically to the [.../id] folder */}
    </div>
  );
}

export default ClientsPage;
