import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>🍄 Teriyaki</title>
      </Head>
      <body class="bg-yellow-200">
        <div class="p-4 mx-auto max-w-screen-md">
          <Navbar active="/" />

          <article class="pb-6">
            <h1 className="text-6xl pb-6 pt-6">Hello Teriyaki,</h1>
            <p class="text-2xl">
              We love{" "}
              <strong>open source software</strong>. Especially when it's fueled
              by friendly competition. We're here to do our part.
            </p>
          </article>
          <div
            class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
            style="background-image:linear-gradient(rgba(55, 65, 81, 0.8),rgba(68, 64, 60, 0.8)), url('/gallery/hero-bg.webp');"
          >
            <div class="space-y-4 text-center">
              <h1 class="text-4xl inline-block font-bold">
                Clack
              </h1>
              <p class="text-xl max-w-lg text-blue-100">
                A small Deno library for reading keypresses in the terminal.
              </p>
            </div>

            <div>
              <pre><code class="block mt-4 text-blue-400 cursor-pointer inline-flex items-center group  bg-black px-8 py-2 rounded-md font-bold">import <span className="text-yellow-400">&#123;keydownEvents&#125;</span> from <span className="text-green-400">"https://deno.land/x/clack/mod.ts"</span></code></pre>
              {" "}
            </div>
            <div>
              <a
                href="https://github.com/teriyaki-bytes/clack"
                class="block  text-blue-500 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
              >
                View Code{" "}
              </a>
            </div>
          </div>
          <Footer children />
        </div>
      </body>
    </>
  );
}
