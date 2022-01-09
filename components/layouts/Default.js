import Header from "../ui/Header";

export default function DefaultLayout({ children }) {
  return (
    <main className="bg-white text-gray-800">
      {children}
    </main>
  );
}
