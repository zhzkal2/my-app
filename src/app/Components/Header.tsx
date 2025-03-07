import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header style={{ top: '1px', left: '0px', width: '2000px', height: '39px', background: '#FFFFFF', boxShadow: '0px 1px 1px #D8D8D8BF', opacity: '1' }}>
            <Link href="https://ankh-systems.co.jp/">
                <div className="absolute top-[13px] left-[12px] ">
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