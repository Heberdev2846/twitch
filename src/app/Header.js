import React from "react";

function Header() {
  return (
    <div className="z-10 px-2 pb-1 flex items-center fixed top-0 w-full justify-between border-b-black bg-zinc-900">
        <div className="flex flex-grow basis-0">
          <ul className="flex items-center">
            <a href="">
              <li className="mr-4 mt-2">
                <button className="">
                  <img className="w-8" src="/img/twitch2.png" />
                </button>
              </li>
            </a>
            <li className="mr-4">
              <a href="">
                <p className="hover:text-violet-500 font-semibold text-sm">
                  Siguiendo
                </p>
              </a>
            </li>
            <li>
              <a href="">
                <p className="hover:text-violet-500 font-semibold text-sm">
                  Explorar
                </p>
              </a>
            </li>
            <li className="ml-4">
              <button className="rounded-sm p-1 mt-1 hover:bg-zinc-700">
                <img />
                <svg
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div className="relative inline-block mr-32">
          <div className="">
            <img />
            <svg
              className="absolute transform-translate-y-1/2 ml-[356px] border-r border-t border-b border-zinc-700 rounded-r-md bg-zinc-700 pl-1 pr-1"
              width="30px"
              height="34px"
              version="1.1"
              viewBox="0 0 20 20"
              x="0px"
              y="0px"
              data-a-selector="tw-core-button-icon"
              class="ScIconSVG-sc-1q25cff-1 ifhFgG"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
                  clip-rule="evenodd"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </div>
          <input
            placeholder="Buscar"
            className="rounded-l-md pr-32 border border-zinc-600 py-1 p-2 bg-zinc-900 placeholder-white"
          ></input>
        </div>

        <div className="flex flex-grow justify-end basis-0">
          <ul className="flex items-center">
            <li className="p-1 rounded-md hover:bg-zinc-700">
              <a href="">
                <img />
                <svg
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="ml-3 p-1 rounded-md hover:bg-zinc-700">
              <a href="">
                <img />
                <svg
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="ml-3 p-1 rounded-md hover:bg-zinc-700">
              <a href="">
                <img />
                <svg
                  width="20px"
                  height="20px"
                  fill="#fff"
                  viewBox="0 0 20 20"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="ml-3 p-1 rounded-md hover:bg-zinc-700">
              <a href="">
                <img />
                <svg
                  width="20px"
                  height="20px"
                  fill="#fff"
                  version="1.1"
                  viewBox="0 0 20 20"
                  x="0px"
                  y="0px"
                  aria-hidden="true"
                  focusable="false"
                  class="ScIconSVG-sc-1q25cff-1 ifhFgG"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"
                  ></path>
                </svg>
              </a>
            </li>
            <div className="flex items-center ml-4 px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-600">
              <li>
                <a href="">
                  <img className="" />
                  <svg
                    className="mr-2"
                    width="20px"
                    height="20px"
                    fill="#fff"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <div>
                <a href="">
                  <p className="text-xs font-bold">Mira sin anuncios</p>
                </a>
              </div>
            </div>
            <a href="">
              <li>
                <img
                  className="w-7 rounded-full ml-4"
                  src="/img/forrex2.png"
                />
              </li>
            </a>
          </ul>
        </div>
      </div>
  );
}

export default Header;
