import { useState } from "react"
import Image from "next/image"

import NavBar from "../components/NavBar"
import blog from "../blog.config.js"
import { textStyle } from "../styles/tailwind"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className="mx-auto lg:w-2/3 p-6">
        <div className="p-2 flex flex-col items-center sm:items-start sm:flex-row ">
          <div className="sm:w-1/3 sm:pr-4">
            <Image
              width={80}
              height={80}
              style={{
                borderRadius: "50%",
              }}
              src={blog.about.picture}
              alt="Picture of me"
              placeholder="blur"
              blurDataURL="/blogBlank.png"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start p-4 sm:p-0">
            <div className="pb-1">
              <div
                className={textStyle({
                  sizes: "titleSecond",
                  colors: "onColor",
                })}
              >
                {blog.about.author}
              </div>
            </div>
            <div
              className={textStyle({
                sizes: "contentSecond",
                colors: "contentColor",
              })}
            >
              {blog.about.birth}
            </div>
            <div
              className={textStyle({
                sizes: "contentSecond",
                colors: "contentColor",
              })}
            >
              {"취미: " + blog.about.hobby}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-start">
          <div className="sm:w-1/3">
            <div className="sm:pr-4 space-y-2  flex flex-col items-center sm:items-start">
              <div
                className={textStyle({
                  sizes: "titleSecond",
                  colors: "onColor",
                })}
              >
                Info
              </div>
              <div
                className={textStyle({
                  sizes: "titleThird",
                  colors: "titleColor",
                })}
              >
                Address
              </div>
              <div
                className={textStyle({
                  sizes: "contentSecond",
                  colors: "contentColor",
                })}
              >
                {blog.about.address}
              </div>
              <div
                className={textStyle({
                  sizes: "titleThird",
                  colors: "titleColor",
                })}
              >
                Email
              </div>
              <div
                className={textStyle({
                  sizes: "contentSecond",
                  colors: "contentColor",
                })}
              >
                {blog.about.email}
              </div>
            </div>
          </div>
          <div className="sm:w-2/3">
            <div className="py-3">
              <div
                className={textStyle({
                  sizes: "titleSecond",
                  colors: "onColor",
                })}
              >
                Content
              </div>
              {blog.about.intro}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
