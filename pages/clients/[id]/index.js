import { useRouter } from "next/router";

// 🔘🔘[Navigating Programmatically]🔘🔘
function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/mci/projecta");
    //OR this solution 👇
    // router.push({
    //   pathname: "/clients/[id]/[clientprojectid]",
    //   query: { id: "mci", clientprojectid: "projecta" },
    // });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
    // 🔘🔘[Navigating Programmatically]🔘🔘
  );
}

export default ClientProjectsPage;
