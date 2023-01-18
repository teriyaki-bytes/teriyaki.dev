import { Head } from "$fresh/runtime.ts";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";
// import { posts } from "../../main.ts";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <body class="bg-yellow-200">
        <div class="p-4 mx-auto max-w-screen-md">
          <Navbar active="/blog" />
          {/* {posts.forEach((val, key) => (
            <article class="pb-6" key={val.title}>
              <h1 className="text-6xl pb-6 pt-6">{val.title} {key}</h1>
              
               
            </article>
          ))} */}
          <p class="">Comming Soon...</p>

          <Footer children />
        </div>
      </body>
    </>
  );
}
