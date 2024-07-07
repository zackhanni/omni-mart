import AdminNav, { NavLink } from "../components/AdminNav";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
