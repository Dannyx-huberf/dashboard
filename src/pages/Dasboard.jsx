import Header from "../components/Header";
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return(
    <>
    <div className="overall-container ">
      <Header/>
      <Outlet/> {/* This is where the page content (Daily, Weekly, etc.) will be injected */}
    </div>
    
    </>
  )
}