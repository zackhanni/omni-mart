import AdminNav, { NavLink } from "../components/AdminNav";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const dynamic = "force-dynamic"; // force next to not cache any admin pages

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
