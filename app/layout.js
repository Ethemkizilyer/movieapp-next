import './globals.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
