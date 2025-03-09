import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="relative top-[0.0625rem]  w-full max-w-[125rem] mx-auto h-[2.4375rem] bg-white shadow-md ">
            <Link href="https://ankh-systems.co.jp/">
                <div className="relative top-[0.8125rem] left-[0.75rem] ">
                    <Image
                        src="/logo@2x.png"  // 이미지 경로
                        alt="Logo"
                        width={125}  // 이미지의 실제 너비
                        height={14}  // 이미지의 실제 높이
                    />
                </div>
            </Link>
        </header>
    );
}