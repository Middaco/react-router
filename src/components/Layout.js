import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(){
    return(
        <div className="page-container">
            <Header />
            <main className="content-wrapper">
                <Outlet />  
            </main>
            <Footer />
        </div>
    )
}