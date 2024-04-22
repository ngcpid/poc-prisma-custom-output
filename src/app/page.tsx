import { dbAuth } from "@/lib/db-auth";
import Image from "next/image";

const HomePage = async () => {
  const user = await dbAuth.user.findFirst();
  return ( 
    <div>
      <h1>Home Page</h1>
      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={500}
        height={500}
      />
    </div>
   );
}
 
export default HomePage;
