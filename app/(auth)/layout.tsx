import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* LEFT SECTION */}
      <section className="hidden w-1/2 items-center justify-center bg-[#3D8D7A] p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-10">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="group flex items-center gap-[8px]">
              <Image
                src="/assets/icons/logo-full.svg"
                alt="logo"
                width={120}
                height={120}
                className="h-auto transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105"
              />

              <h2 className="font-brand bg-gradient-to-r from-black via-neutral-700 to-black bg-clip-text text-5xl font-extrabold tracking-tight text-transparent transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                ReKall
              </h2>
            </div>
          </div>

          {/* Heading + Curved Text */}
          <div className="space-y-5 text-[#FFF6E9]">
            <h1 className="h1 text-4xl font-bold leading-snug">Manage your files the best way</h1>

            {/* Curved wave text */}
            <div className="w-full text-center">
              <svg
                viewBox="0 0 600 140"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-full max-w-[500px]"
              >
                {/* Wave path */}
                <path id="wavePath" d="M10,80 Q110,20 210,80 T410,80 T610,80" fill="transparent" />
                {/* Text following the wave */}
                <text
                  fontSize="18"
                  fill="#075B5E"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="400"
                >
                  <textPath href="#wavePath" startOffset="0%">
                    This is a place where you can store all your documents.
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Image slightly to the left */}
          <div className="-ml-6">
            <Image
              src="/assets/images/files.png"
              alt="Files"
              width={342}
              height={342}
              className="transition-all hover:rotate-2 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;
