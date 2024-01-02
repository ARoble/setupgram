import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
export default function Header() {
  return (
    <div className="flex justify-between items-center py-8">
      <h1 className="text-2xl">SetupGram</h1>
      <div className="space-x-3">
        {/* <button className="bg-secondary p-2 px-2  text-primary">
          Create account
        </button>
        <Link href="/login">Login</Link> */}
        <button className="flex items-center px-3 py-2.5 bg-secondary text-primary rounded-sm text-sm ">
          <FcGoogle size={25} className="mr-3" /> Sign in with Google
        </button>
      </div>
    </div>
  );
}
