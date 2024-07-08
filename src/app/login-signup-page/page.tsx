import Loginsignup from "./components/Loginsignup";
import ToastProvider from "@/common/components/ToastContainer";
export default function Home() {
  return (
    <main>
      <ToastProvider>
      <Loginsignup />
      </ToastProvider>
    </main>
  );
}
