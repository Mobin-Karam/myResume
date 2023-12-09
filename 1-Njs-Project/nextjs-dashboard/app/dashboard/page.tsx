import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function dashboard() {
  return (
    <div className="w-full">
      <p className="">Dashboard Page</p>
      {/* // Button for going back to Home Page  */}
      <div className="w-[200px]">
        <Link href="/" className="w-auto text-center font-bold text-white m-10 block bg-blue-500 p-2">
          Click
        </Link>
      </div>
    </div>
  );
}
