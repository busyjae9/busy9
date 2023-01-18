import Link from "next/link"
import { useRouter } from "next/router"
import blog from "../blog.config.js"
import { textStyle } from "../styles/tailwind"

export default function NavBar() {
  const router = useRouter()

  console.log()

  return (
    <div className="flex flex-row items-center justify-center gap-x-6 p-6 bg-indigo-200 dark:bg-neutral-800">
      <Link
        className={textStyle({
          sizes: "title",
          colors: [
            "hoverColor",
            router.pathname === "/" ? "onColor" : "titleColor",
          ],
        })}
        href="/"
      >
        Home
      </Link>
      <Link
        className={textStyle({
          sizes: "title",
          colors: [
            "hoverColor",
            router.pathname === "/about" ? "onColor" : "titleColor",
          ],
        })}
        href="/about"
      >
        About
      </Link>
    </div>
  )
}
