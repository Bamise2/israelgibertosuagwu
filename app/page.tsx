"use client";
import TributeForm from "@/components/tribute-form";
import Header from "@/components/header";
import Footer from "@/components/footer";

import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f5f1eb" }}
    >
      <Header />
      <div className="w-full" style={{ backgroundColor: "#fef8f3" }}>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0 w-full md:w-auto md:flex-1">
              <div className="relative inline-block w-full md:w-80">
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                  style={{ backgroundColor: "#d4a574" }}
                />
                <div className="relative w-full md:w-80 aspect-[3/4]">
                  <Image
                    src="/nonye.jpg"
                    alt="Late Chief Israel Gilbert Osuagwu"
                    fill
                    className="rounded-3xl shadow-2xl object-cover border-8 border-[#d4a574]"
                  />
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 md:py-8">
              <div className="mb-6">
                <p
                  className="text-sm tracking-widest uppercase mb-3"
                  style={{ color: "#d4a574" }}
                >
                  A Life Well Lived
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#2d1810" }}
                >
                  Chief Israel Gilbert Osuagwu
                </h2>
                <p
                  className="text-xl font-semibold mb-6"
                  style={{ color: "#d4a574" }}
                >
                  1945 — 2025
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#4a3728" }}
                >
                  A beloved father, husband, brother, uncle, and grandfather who
                  touched the lives of all who knew him. His legacy of wisdom,
                  kindness, and service will forever be remembered.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "#fff9f3" }}
                >
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#d4a574" }}
                  >
                    Born
                  </p>
                  <p
                    className="font-semibold text-lg"
                    style={{ color: "#2d1810" }}
                  >
                    1945
                  </p>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "#fff9f3" }}
                >
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#d4a574" }}
                  >
                    Legacy
                  </p>
                  <p
                    className="font-semibold text-lg"
                    style={{ color: "#2d1810" }}
                  >
                    80 Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <TributeForm />
      </main>
      <Footer />
    </div>
  );
}
