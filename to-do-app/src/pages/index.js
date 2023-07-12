
import { router } from "next/router"
import { useEffect } from "react"
import MainIndex from "./home/main"
import Login from "./auth/login"


export default function Home() {
  // token= true

  // useEffect(() => {
  //   if(!token){
  // router.push("/auth/login")
  //   }
  // }, []


  return (
    <>
      <Login />



    </>
  )
}
