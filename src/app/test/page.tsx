import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Image from "next/image";

export default function Test() {
    return (
        <>
            <Header /> {/* Header 컴포넌트가 렌더링 됩니다. */}
            <section className="w-full max-w-[2000px] mx-auto px-[2.5rem]">
                <div className='relative  w-full max-w-[1000px] mx-auto'>
                    <Image
                        src="/main-v@2x.png"
                        alt="toranomon"
                        width={1000}
                        height={500}
                        layout="responsive"
                    />
                    <div className="absolute  top-8 w-full h-[130px] bg-black/50  flex justify-center items-center">
                        <h1 className="text-white text-3xl">여기에 텍스트가 들어갑니다</h1>
                    </div>
                </div>
                <div className="w-full max-w-[1000px] mx-auto grid grid-cols-2  grid-rows-auto gap-4">
                    {/* 첫 번째 열 */}
                    <div className="bg-blue-500 bg-opacity-0 col-span-1">첫 번째 콘텐츠</div>

                    {/* 두 번째 열 */}
                    <div className="bg-green-500 col-span-1">두 번째 콘텐츠</div>

                    {/* 두 번째 콘텐츠: 2개의 열을 병합 */}
                    <div className="bg-green-500 col-span-2 row-span-2">두 번째 콘텐츠 (2개의 열 합침)</div>

                    {/* 세 번째 콘텐츠: 일반적인 셀 */}
                    <div className="bg-red-500 col-span-1">세 번째 콘텐츠</div>
                    <div className="bg-indigo-600 bg-opacity-0 col-span-1"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}