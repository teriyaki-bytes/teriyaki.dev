import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default function doji() {
    return (
        <>
        <Head>
        <title>Doji 土地 </title>
      </Head>
      <body class="bg-red-400">
        <div class="p-4 mx-auto max-w-screen-md">
          <Navbar active="/" />

          <article class="pb-6">
            <h1 className="text-6xl pb-6 pt-6">Hello 土地,</h1>
            <p class="text-2xl">
             Doji is a TypeScript and JavaScript runtime built on Deno designed to make large-scale project development simpler.
            </p>
          </article>
          <div
            class="w-full flex px-8 mb-4 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
            style="background-image:linear-gradient(rgba(55, 65, 81, 0.8),rgba(68, 64, 60, 0.8))"
          >
            <div class="space-y-4 text-center">
              <h1 class="text-4xl inline-block font-bold">
                Doji
              </h1>
              <p class="text-xl max-w-lg text-blue-100">
                A JavaScript and TypeScript runtime and project manager.
              </p>
            </div>

            <div class="hidden lg:block">
              <pre><code class="lg:block sm:overflow-x-auto  mx-auto container mt-4 text-blue-400 inline-flex items-center group  bg-black md:px-8 py-2 rounded-md font-bold">cargo install doji</code></pre>
              
            </div>
            <div>
              <a
                href="https://github.com/teriyaki-bytes/doji"
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
    )
}