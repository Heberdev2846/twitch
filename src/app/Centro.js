import React from "react";

function Centro() {
  return (
    <div className="">
      <div className="">
        <img
          className="w-screen z-1 pt-12 h-[520px]"
          src="/img/thumb-1920-1319775.jpeg"
        />
        <div className="absolute top-[140px] left-[300px] p-4 w-[310px] h-80 bg-zinc-800">
          <div className="w-32 rounded-[6px] py-1 text-black bg-slate-200">
            <p className="text-xs text-center font-bold">PRIVADO PARA TI</p>
          </div>
          <h2 className="mt-1 text-2xl font-bold">
            Un video de presentación en tu ausencia.
          </h2>
          <p className="mt-4 text-xs leading-5 max-w-[250px] ">
            No te preocupes por perder visitantes al estar sin conexión. Anima a
            los espectadores a volver cuando estés en vivo con el tráiler de
            canal.
          </p>
          <button className="text-sm hover:bg-zinc-600 rounded-[4px] mt-2 p-1 px-2 bg-zinc-700">
            <a className="font-semibold text-xs" href="#">
              Establecer un tráiler de canal
            </a>
          </button>
          <button className="text-sm rounded-[4px] p-1 px-2 font-semibold text-violet-400 hover:bg-zinc-600 hover:text-white">
            <a href="#">Recordármelo más tarde</a>
          </button>
        </div>
      </div>
      <div className="absolute top-[140px] left-[640px] w-[530px] h-80 bg-zinc-800 flex items-center justify-center">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/img/video.jpg"
            alt="Video"
          />
        </div>
        <div className="absolute">
          <img />
          <svg fill="white" width="75" height="75" viewBox="0 0 20 20">
            <path d="M5 17.066V2.934a.5.5 0 0 1 .777-.416L17 10 5.777 17.482A.5.5 0 0 1 5 17.066z"></path>
          </svg>
        </div>
      </div>
      <div className="ml-64 absolute bg-zinc-950 h-full w-[1050px]">
        <div className="ml-10 mt-4 flex items-center">
          <div className="flex items-center">
            <img className="border rounded-full" src="/img/forrex2.png"></img>
            <div>
              <p className="text-white ml-3 font-bold text-2xl">elforrex</p>
              <p className="text-white ml-3 text-sm">2.9 k Seguidores</p>
            </div>
          </div>
          <div className="ml-24 flex items-center">
            <div className="flex items-center hover:bg-zinc-700 p-1 rounded-[5px]">
              <a className="flex items-center" href="#">
                <img />
                <svg
                  fill="violet"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M15 7V5h-2V3h2V1h2v2h2v2h-2v2h-2Z"></path>
                  <path d="M10 2c.339 0 .672.021 1 .062v2.021A6 6 0 1 0 15.917 9h2.021A8 8 0 1 1 10 2Z"></path>
                  <path d="M12 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 1a2 2 0 1 1-4 0h4Z"></path>
                </svg>
                <p className="ml-2 text-sm font-semibold text-violet-600">
                  Reaccionar
                </p>
              </a>
            </div>
            <div className="flex items-center bg-zinc-800 hover:bg-zinc-700 p-1 rounded-[5px] ml-4">
              <a className="flex items-center" href="#">
                <img />
                <svg
                  fill="white"
                  width="20px"
                  height="20px"
                  version="1.1"
                  viewBox="0 0 20 20"
                  x="0px"
                  y="0px"
                  data-a-selector="tw-core-button-icon"
                  aria-hidden="true"
                  class="ScIconSVG-sc-1q25cff-1 ifhFgG"
                >
                  <g>
                    <path d="M8.944 2.654c.406-.872 1.706-.872 2.112 0l1.754 3.77 4.2.583c.932.13 1.318 1.209.664 1.853l-3.128 3.083.755 4.272c.163.92-.876 1.603-1.722 1.132L10 15.354l-3.579 1.993c-.846.47-1.885-.212-1.722-1.132l.755-4.272L2.326 8.86c-.654-.644-.268-1.723.664-1.853l4.2-.583 1.754-3.77z"></path>
                  </g>
                </svg>
                <p className="ml-2 text-xs font-semibold ">
                  Administra tu suscripción: descuento del 25%
                </p>
              </a>
            </div>
            <div className="flex items-center bg-violet-600 hover:bg-zinc-700 p-1 rounded-[5px] ml-4">
              <a className="flex items-center" href="#">
                <img />
                <svg
                  fill="white"
                  width="20px"
                  height="20px"
                  version="1.1"
                  viewBox="0 0 20 20"
                  x="0px"
                  y="0px"
                  data-a-selector="tw-core-button-icon"
                  aria-hidden="true"
                  class="ScIconSVG-sc-1q25cff-1 ifhFgG"
                >
                  <g>
                    <path
                      fill-rule="evenodd"
                      d="M16 6h2v6h-1v6H3v-6H2V6h2V4.793c0-2.507 3.03-3.762 4.803-1.99.131.131.249.275.352.429L10 4.5l.845-1.268a2.81 2.81 0 01.352-.429C12.969 1.031 16 2.286 16 4.793V6zM6 4.793V6h2.596L7.49 4.341A.814.814 0 006 4.793zm8 0V6h-2.596l1.106-1.659a.814.814 0 011.49.451zM16 8v2h-5V8h5zm-1 8v-4h-4v4h4zM9 8v2H4V8h5zm0 4H5v4h4v-4z"
                      clip-rule="evenodd"
                    ></path>
                  </g>
                </svg>
                <p className="ml-2 text-xs font-semibold ">
                  Suscripción de regalo: -25%
                </p>
                <img />
                <svg
                  fill="white"
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.5 6.5 10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="ml-2 hover:bg-zinc-600 rounded-[3px] p-[4px]">
            <a href="#">
              <img />
              <svg
                fill="white"
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-5 ml-10 mr-8 p-4 rounded-[4px] bg-zinc-900 flex items-center">
          <div className="flex items-center">
            <p className="font-bold text-lg">Resumen de agosto de elforrex</p>
            <p className="ml-2 text-xs">
              Veamos qué conseguiste este mes con tu suscripción a elforrex
            </p>
          </div>
          <div className="ml-48 flex items-center">
            <button className="p-1 px-3 text-sm font-semibold bg-violet-600 rounded-[4px]">
              Mostrar
            </button>
            <img className="ml-2" />
            <svg
              fill="white"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M8.5 10 4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"></path>
            </svg>
          </div>
        </div>
        <div className="ml-10 mt-6 flex items-center">
          <a className="mr-4" href="#">
            <p className="font-bold text-xl text-violet-400">Inicio</p>
          </a>
          <a className="mr-4" href="#">
            <p className="font-bold text-xl">Acerca de</p>
          </a>
          <a className="mr-4" href="#">
            <p className="font-bold text-xl">Agenda</p>
          </a>
          <a className="mr-4" href="#">
            <p className="font-bold text-xl">Videos</p>
          </a>
          <a className="flex items-center" href="#">
            <img />
            <svg fill="white" width="25" height="25" viewBox="0 0 20 20">
              <path d="M6 8h5.293L5 14.293l1.414 1.414 6.293-6.293V15h2V6H6v2z"></path>
            </svg>
            <p className="font-bold ml-1 text-xl">Chat</p>
          </a>
          <a
            className="ml-96 flex items-center px-4 rounded-[4px] p-1 bg-zinc-800"
            href="#"
          >
            <img />
            <svg fill="white" width="20" height="20" viewBox="0 0 20 20">
              <path d="M6 8h5.293L5 14.293l1.414 1.414 6.293-6.293V15h2V6H6v2z"></path>
            </svg>
            <p className="font-bold text-xs ml-2">Personalizar canal</p>
          </a>
        </div>
        <div className="ml-10 mt-6 text-lg font-semibold">
          <p>Momentos Random</p>
        </div>
      </div>
    </div>
  );
}

export default Centro;
