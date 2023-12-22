import { useRouter } from "next/router";

//📍📍[CATCH-ALL ROUTES]📍📍
function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
