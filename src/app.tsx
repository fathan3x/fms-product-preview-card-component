import "@fontsource-variable/fraunces";
import "@fontsource-variable/montserrat";
import { cn } from "cn";

import mobile from "./assets/product-mobile.webp";
import desktop from "./assets/product-desktop.webp";

export function App() {
  const style = {
    "bg-cream": "bg-[hsl(30,38%,92%)]",
    "text-gray": "text-[hsl(228,12%,48%)]",
    "text-black": "text-[hsl(212,21%,14%)]",
    "text-new-green-500": "text-[hsl(158,36%,37%)]",
    "hover-button": "bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,42%,18%)]",
  };
  return (
    <main
      className={cn(
        style["bg-cream"],
        "min-w-screen min-h-screen flex flex-col items-center justify-center p-4",
      )}
    >
      <section className="sm:max-w-160 w-full font-['Montserrat_Variable'] font-medium">
        <div
          className={cn(
            style["text-gray"],
            "w-full rounded-xl overflow-hidden bg-white flex flex-col sm:flex-row shadow-xl",
          )}
        >
          <picture className="basis-1/2">
            <source media="(min-width: 640px)" srcSet={desktop} />
            <source media="(min-width: 320px)" srcSet={mobile} />
            <img className="w-full h-full object-cover" src={desktop} />
          </picture>
          <div className="p-8 space-y-6 sm:space-y-8 basis-1/2">
            <p>P E R F U M E</p>
            <h1
              className={cn(style["text-black"], "font-bold text-4xl")}
              style={{ fontFamily: "Fraunces Variable" }}
            >
              Gabrielle Essence Eau De Parfum
            </h1>
            <p>
              A floral, solar, and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-6">
              <p
                className={cn(
                  style["text-new-green-500"],
                  "font-bold text-4xl",
                )}
                style={{ fontFamily: "Fraunces Variable" }}
              >
                $149.99
              </p>
              <p className="line-through">$169.99</p>
            </div>
            <button
              className={cn(
                style["hover-button"],
                "text-white flex items-center justify-center font-semibold gap-4 w-full p-4 rounded-md cursor-pointer",
              )}
            >
              <Cart />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Cart() {
  return (
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
        fill="#FFF"
      />
    </svg>
  );
}
