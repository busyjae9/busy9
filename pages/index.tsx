import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="p-6">
        <div className="grid grid-cols-3">
          <div className="col-span-1">side bar</div>
          <div className="col-span-2">home</div>
        </div>
      </div>
    </div>
  )
}
