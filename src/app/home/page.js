"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Initialize each product with a count property
        const productsWithCount = data.map((product) => ({
          ...product,
          count: 0,
        }));
        setProducts(productsWithCount); // Update state with fetched products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    setCartCount(storedCart.length);
  }, []);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === product.id) {
        return {
          ...prod,
          count: prod.count + 1, // Increment count for clicked product
        };
      }
      return prod;
    });
    setProducts(updatedProducts);

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCartCount(updatedCart.length);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <nav class="flex flex-wrap items-center justify-between p-3 ">
        <div class="text-xl font-bold ml-5">ShopLane</div>
        <div class="flex md:hidden">
          <button id="hamburger">
            <img
              class="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              class="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div class=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
          <a
            href="#home"
            class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Home
          </a>
          <a
            href="#services"
            class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Clothing
          </a>

          <a
            href="#gallery"
            class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
          >
            Assesories
          </a>
        </div>

        <div class="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 mr-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
            <text x="13" y="10" class="text-xs text-white">
              {cartCount}
            </text>
          </svg>

          <img
            class="inline-block w-8 h-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </nav>
      {/* <!-- hero seciton --> */}
      <div class="relative w-full h-screen px-5" id="home">
        <div class="absolute inset-0 ">
          <img
            // src="https://as2.ftcdn.net/v2/jpg/06/26/35/15/1000_F_626351535_dGLCJiZAvwDp9AQeoDhtMMQ1LglRS5xh.jpg"
            // src="https://media.istockphoto.com/id/1279375718/photo/couple-shopping-in-the-city.jpg?s=612x612&w=0&k=20&c=vFoFqICmIVsyzfu2Z_ucYfLbZSJhk0eH8IW-a-tqATo="
            src="https://media.istockphoto.com/id/1348566506/photo/two-beautiful-happy-women-with-shopping-bags-in-the-city-next-to-shop-window-background.jpg?s=612x612&w=0&k=20&c=BNgru0G1nq5xUtTXivm2JU6HAfY7vxMEFKFsETpLTTE="
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div class="relative my-12 flex w-full flex-col items-start sm:mt-24">
            <h3 class="mt-8 max-w-sm bg-white bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
              <span className="text-gray">ShopLane</span>
            </h3>
            <span class="mt-8 max-w-lg text-start text-xl leading-relaxed text-white">
              Discover the latest features and enhancements for your SaaS
              product. Stay ahead in the market with these improvements.
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://example.com"
              class="mt-4 flex max-w-fit items-start justify-start space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
            >
              <p class="text-sm font-semibold text-[#1d9bf0]">
                Introducing Feature
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- our services section --> */}
      <section class="py-10" id="services">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-white md-5 mb-8 text-center">
            Our Clothing
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products
              .filter((e) => e.category =="women's clothing" ||e.category =="men's clothing")
              .map((product) => (
                <div
                  key={product.id}
                  className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                >
                  <a
                    href="#"
                    className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover"
                    />
                  </a>
                  <div className="mt-4 px-5 pb-5 flex justify-between flex-col h-auto">
                    <a>
                      <h5 className="text-xl tracking-tight text-slate-900">
                        {product.title}
                      </h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-3xl font-bold text-slate-900">
                          ${product.price}
                        </span>
                        <span className="text-sm text-slate-900 line-through">
                          ${product.price * 1.5}{" "}
                          {/* Adjust for original price */}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center bottom-0 w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to cart {product.count}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* <!-- why us  --> */}
      <section class="text-gray-700 body-font mt-10">
        <div class="flex justify-center text-3xl font-bold text-white text-center">
          Why Choose Us
        </div>
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-white">
                  Latest Milling Machinery
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-white">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-white">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-white">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- gallery --> */}
      <div class="flex justify-center text-3xl font-bold text-white text-center">
        Accesorie
      </div>

      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products
          .filter((e) => e.category == "jewelery")
          .map((product) => (
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={product.image}
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                  </p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      {product.price}
                    </p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1546241183-0ed3f8a4a824?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1582812162044-ceaaba61685e?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p class="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 6 - Ends Here  --> */}
      </section>

      <div class="flex justify-center text-3xl font-bold text-white text-center p-5">
      Electronics
      </div>

      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products
          .filter((e) => e.category == "electronics")
          .map((product) => (
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={product.image}
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                  </p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      {product.price}
                    </p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}

       
        {/* <!--   🛑 Product card 6 - Ends Here  --> */}
      </section>

      {/* <!-- about us --> */}
      <section class="bg-gray-100" id="aboutus">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl font-bold text-black mb-8 text-center">
                About Us
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Bappa flour mill provides our customers with the highest quality
                products and services. We offer a wide variety of flours and
                spices to choose from, and we are always happy to help our
                customers find the perfect products for their needs. We are
                committed to providing our customers with the best possible
                experience. We offer competitive prices, fast shipping, and
                excellent customer service. We are also happy to answer any
                questions that our customers may have about our products or
                services. If you are looking for a flour and spices service
                business that can provide you with the highest quality products
                and services, then we are the company for you. We look forward
                to serving you!
              </p>
            </div>
            <div class="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="container my-12 bg-white p-4 mx-auto px-2 md:px-4">
        <section class="mb-32">
          <div class="flex justify-center">
            <div class="text-center md:max-w-xl lg:max-w-3xl">
              <h2 class="mb-12 px-6 text-3xl font-bold">Contact us</h2>
            </div>
          </div>

          <div class="flex flex-wrap">
            <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Name"
                />
              </div>

              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Enter your email address"
                />
              </div>

              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Message
                </label>
                <textarea
                  class="px-2 py-2 border rounded-[5px] w-full outline-none"
                  name=""
                  id=""
                ></textarea>
              </div>

              <button
                type="button"
                class="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
              >
                Send
              </button>
            </form>

            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold">Technical support</p>
                      <p class="text-neutral-500 ">support@example.com</p>
                      <p class="text-neutral-500 ">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold ">Sales questions</p>
                      <p class="text-neutral-500 ">sales@example.com</p>
                      <p class="text-neutral-500 ">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold ">Press</p>
                      <p class="text-neutral-500 ">press@example.com</p>
                      <p class="text-neutral-500 ">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="mb-2 font-bold">Bug report</p>
                      <p class="text-neutral-500 ">bugs@example.com</p>
                      <p class="text-neutral-500">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <footer class="bg-gray-200 text-white py-4 px-3">
          <div class="container mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
              <p class="text-xs text-gray-400 md:text-sm">
                Copyright 2024 &copy; All Rights Reserved
              </p>
            </div>
            <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
              <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li>
                  <a href="#contactUs" class="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li class="mx-4">
                  <a href="/privacy" class="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
