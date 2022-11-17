import Link from "next/link"
import { useRouter } from "next/router"
import blog from "../blog.config.json"

export default function NavBar() {
  const router = useRouter()
  return (
    <div>
      {blog.name}
      <nav>
        <Link
          className={`${
            router.pathname === "/" ? "text-red-400" : "text-black"
          } ${
            router.pathname === "/" ? "dark:text-red-400" : "dark:text-white"
          } hover:text-red-400 dark:hover:text-red-400`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            router.pathname === "/about" ? "text-red-400" : "text-black"
          } ${
            router.pathname === "/about"
              ? "dark:text-red-400"
              : "dark:text-white"
          }`}
          href="/about"
        >
          About
        </Link>
      </nav>
    </div>
  )
}
