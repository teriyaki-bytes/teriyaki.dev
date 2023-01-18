import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../../components/Footer.tsx";
import Navbar from "../../components/Navbar.tsx";
import { Post } from "../../lib/blog.ts";
import { posts } from "../../main.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { slug } = ctx.params;
    const post = posts.get(slug);
    if (post == undefined) return ctx.renderNotFound();
    const resp = await ctx.render(post);
    return resp;
  },
};

export default function Slug(props: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
      </Head>
      <body class="bg-yellow-200">
        <div class="p-4 mx-auto max-w-screen-md">
          <Navbar active="/blog" />

          <article
            class="pb-6"
            dangerouslySetInnerHTML={{ __html: props.data.body! }}
          />

          <Footer children />
        </div>
      </body>
    </>
  );
}
