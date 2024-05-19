// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
