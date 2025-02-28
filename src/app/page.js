"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <section
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/couple-with-colorful-bags-shopping-pointing-finger-aside-mall_116547-23705.jpg?w=740")',
      }}
      class="text-gray-700 bg-cover bg-center bg-fixed h-screen bg-gray body-font"
    >
      <div class="container mx-6 pt-[15rem] flex justify-center px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="text-4xl mb-4 tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            ShopLane
          </h1>

          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br class="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p class="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div class="flex justify-center">
            <button
              onClick={() => router.push("/login")}
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/register")}
              class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Register
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
}
