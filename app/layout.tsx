import "./globals.css";
import Nav from "../components/Nav";
export const metadata={title:"AERO:JEL — Making Space Available For All",description:"Independent aerospace engineering by AERO:JEL."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<footer className="footer"><div>AERO:JEL</div><div>MAKING SPACE AVAILABLE FOR ALL</div></footer></body></html>}