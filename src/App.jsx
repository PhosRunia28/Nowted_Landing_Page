import {
  ArrowPathIcon,
  Bars3Icon,
  ChevronRightIcon,
  LockClosedIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import Nowted from "../public/nowted.png";
import { useTheme } from "./components/ThemeProvider/ThemeProvider";
import { Button } from "./components/ui/button";
import { Container } from "./components/ui/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
const menuNavigation = [
  {
    url: "#home",
    label: "Home",
  },
  {
    url: "#product",
    label: "Product",
  },
  {
    url: "#support",
    label: "Support",
  },
  {
    url: "#contact",
    label: "Contact Us",
  },
];

export default function App() {
  const { setTheme } = useTheme();
  return (
    <Container className="mt-4 px-4 py-3 md:mt-8 ">
      <nav className="flex items-center justify-between">
        {/* title */}
        <h2 className="font-Kaushan text-2xl ">Nowted</h2>
        <div className="hidden gap-10 font-Poppins md:flex">
          {menuNavigation.map((menu) => (
            <a
              href={menu.url}
              className="text-sm hover:text-primary"
              key={menu.label}
            >
              {menu.label}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          {/* toggle Theme Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="ml-5 mr-10 text-white">Login</Button>
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger>
                <Bars3Icon className="h-[2rem] w-[2rem]" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="flex h-full max-h-screen items-center justify-center ">
                  <SheetTitle>Welcome to Nowted</SheetTitle>
                  <SheetDescription>
                    Boost your productivity with our streamlined <br />{" "}
                    note-taking solution
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <div className="mt-10 flex flex-col gap-10 text-center font-Poppins md:mt-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-light leading-relaxed lg:max-w-4xl lg:text-4xl lg:leading-relaxed">
          Boost your productivity with our
          <span className="font-bold"> streamlined note-taking </span>
          solution
        </h2>
        <p className="mx-auto max-w-md text-sm opacity-70 md:text-base md:leading-relaxed">
          Effortlessly access your notes from any device with our convenient
          cloud-based solution.
        </p>
        <div className="">
          <Button className="max-w-fit px-8 py-7 text-white">
            Try For Free
            <ChevronRightIcon className="ml-4 h-[1.5rem] w-[1.5rem]" />
          </Button>
        </div>
      </div>
      <div className="my-16 border bg-black/5 px-3 py-5 dark:bg-white/5 lg:py-8">
        <div className="relative">
          <img
            src={Nowted}
            alt="nowted"
            className="mx-auto mt-12 bg-cover bg-center "
          />
          <div className="absolute -top-10 left-0 flex gap-1 lg:-top-10 lg:left-20 ">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="absolute -top-14 left-[50%] flex w-full max-w-fit -translate-x-[50%]  items-center justify-between gap-10 border bg-black/5 px-5 py-2 dark:bg-white/5 lg:-top-14 lg:max-w-lg">
            <div className="flex items-center gap-3">
              <LockClosedIcon className="h-[1.1rem] w-[1.1rem]" />
              <p className="text-xs md:text-sm">https://nowted.app</p>
            </div>
            <ArrowPathIcon className="h-[1.1rem] w-[1.1rem]" />
          </div>
        </div>
      </div>
    </Container>
  );
}
