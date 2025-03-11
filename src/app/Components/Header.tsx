import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative top-[0.0625rem] mx-auto h-[2.4375rem] w-full bg-white shadow-md">
      <Link href="https://ankh-systems.co.jp/">
        <div className="relative top-[0.8125rem] left-[0.75rem]">
          <Image src="/logo@2x.png" alt="Logo" width={125} height={14} />
        </div>
      </Link>
    </header>
  );
}
