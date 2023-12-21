import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  //send a request to some backend server === this is how we can have acces to some piece of data and also how we can send requests to some back end database
  //to fetch the piece of data with an id router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
