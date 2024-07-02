
import Loginsignup from "./components/Loginsignup";
import { UserProvider } from "./components/UserContext";
export default function Home() {
  return (
    <UserProvider>
    <main>
      <Loginsignup />
    </main>
    </UserProvider>
  );
}
