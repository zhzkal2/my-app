import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Image from "next/image";
import MyMap from '../Components/MyMap';

export default function Test() {
    return (
        <>
            <Header /> {/* Header 컴포넌트가 렌더링 됩니다. */}
            <section className="w-full max-w-[125rem] mx-auto px-[2.5rem] ">
                <div className='relative  w-full max-w-[62.5rem] mx-auto'>
                    <Image
                        src="/main-v@2x.png"
                        alt="toranomon"
                        width={1000}
                        height={500}
                        layout="responsive"
                    />
                    <div className="absolute pr-5 pl-5 pt-3 top-4  gap-0.5 w-full  md:top-8 h-[4rem] md:h-[8.125rem]  bg-black/50  flex flex-col justify-center items-center">
                    {/* <div className="pr-5 pl-5 pt-3 absolute gap-0.5 top-4 lg:top-8 w-full h-[4rem] lg:h[8.125rem] bg-black/50  flex flex-col justify-center items-center  "> */}
                    <Image
src={"/Hello,TORANOMON@2x.png"}
alt='toranomon'
width={642}
height={61}
layout="intrinsic"  
className=' h-auto w-[85%] md:w-[100%]'
/>
                    <span className="text-[#FFFFFF] whitespace-nowrap text-[0.7rem] md:text-[1.563rem]  ">東京オフィスは、虎ノ門にて新しいスタートを切ります</span>
                    </div>
                </div>
                <div className="relative w-full max-w-[62.5rem] mt-4  mx-auto  flex flex-wrap gap-4 ">
                    {/* 첫 번째 열 */}
                    <div className="bg-blue-500      flex-grow basis-[calc(50%-0.5rem)]    ">
                    <Image
                        src="/main-v@2x.png"
                        alt="toranomon"
                        width={500}
                        height={500}
                        className='p-4 '
                    />
                    </div>

                    {/* 두 번째 열 */}
                    <div className="bg-green-500 flex-grow basis-[calc(50%-0.5rem)]  ">
                        <div  className='p-4'>
                        <span>
                        このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し ２０１４年３月４日(火)大安より営業の運びとなりました。 新オフィスは、打ち合わせスペースも多くありますので お近くにお越しの際はどうぞお気軽にお立ち寄りください。 今後とも弊社をどうぞよろしくお願い申し上げます。
                        </span>
                        </div>

                    </div>

                    {/* 세 번째 열 */}
                    <div className="bg-green-500 flex-grow basis-[calc(50%-0.5rem)]   ">
                        <div className='p-4'>
                        <span >
                            <label htmlFor=""></label>
                        新東京オフィスの地図はこちら
                        </span>
                        <span>
                        〒105-0001 港区虎ノ門2-7-16 エグゼクティブタワー虎ノ門 504
                        </span>

                        </div>
                        {/* map */}

                    </div>
                    {/* 네 번째 열 */}
                    <div className="bg-green-500  flex-grow basis-[calc(50%-0.5rem)]   ">
                        <div className='p-4'>
                        <span >
                            <label htmlFor=""></label>
                        新東京オフィスの地図はこちら
                        </span>
                        <span>
                        〒105-0001 港区虎ノ門2-7-16 エグゼクティブタワー虎ノ門 504
                        </span>

                        </div>
                        {/* map */}

                    </div>

                    {/* 세 번째 콘텐츠: 일반적인 셀 */}
                    <div className="bg-red-500  flex-grow basis-[calc(50%-0.5rem)]  ">세 번째 콘텐츠</div>
                    <div className="bg-indigo-600  flex-grow basis-[calc(50%-0.5rem)] "></div>
                </div>
            </section>

            <MyMap/>
            <Footer />
        </>
    );
}