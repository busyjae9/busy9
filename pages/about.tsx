import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      About
    </div>
  )
}
