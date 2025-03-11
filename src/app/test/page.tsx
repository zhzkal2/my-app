import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Image from "next/image";
import MyMap from '../Components/MyMap';
import Link from 'next/link';

export default function Test() {
    return (
        // [#F4F4F4]
        <>
            <Header /> {/* Header 컴포넌트가 렌더링 됩니다. */}
            <section className="w-full  mx-auto px-[2.5rem]  bg-gray-200  overflow-hidden items-center justify-center ">
                <div className='mb-10'>
                    <div className='relative  max-w-[31.5rem] lg:max-w-[62.5rem] mx-auto'>
                        <Image
                            src="/main-v@2x.png"
                            alt="toranomon"
                            width={1000}
                            height={500}
                            className='w-full  '


                        />
                        <div className="absolute pr-5 pl-5 pt-4 pb-1 top-4  lg: gap-2 w-full  h-[4rem]  sm:h-[6.125rem] md:h-[7.125rem] lg:h-[8.125rem]  bg-black/50  flex flex-col justify-center items-center">
                            <Image
                                src={"/Hello,TORANOMON@2x.png"}
                                alt='toranomon'
                                width={642}
                                height={61}
                                layout=""
                                className=' mx-auto max-w-[642px] w-[80%] sm:w-[85%] md:w-[90%] lg:w-auto'
                            />
                            <span className="text-[#FFFFFF] text-center text-[0.6rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.563rem] leading-[1.25rem] tracking-[0.03125rem] lg:leading-[1.125rem] lg:tracking-[0.078125rem] ">
                                東京オフィスは、虎ノ門にて新しいスタートを切ります
                            </span>
                        </div>
                    </div>

                    <div className="lg:items-stretch items-center max-w-[62.5rem] mt-4  mx-auto  flex flex-col lg:flex-row justify-center   ">
                        <div className="bg-[#07AB74] max-w-[30.625rem] ">
                            <Image
                                src="/We just moved toTORANOMON4th March 2014@2x.png"
                                alt="toranomon"
                                width={500}
                                height={500}
                                className='p-10 '
                            />
                        </div>


                        <div className="bg-white   max-w-[30.625rem]    ">
                            <div className='p-10 '>
                                <span className='text-[0.875rem] leading-[2.25rem] tracking-[0.14875rem]'>
                                    このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し ２０１４年３月４日(火)大安より営業の運びとなりました。 新オフィスは、打ち合わせスペースも多くありますので お近くにお越しの際はどうぞお気軽にお立ち寄りください。 今後とも弊社をどうぞよろしくお願い申し上げます。
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="relative w-full max-w-[62.5rem] mt-4  mx-auto  flex flex-col lg:flex-row justify-center items-center gap-5">

                        <div className='w-full flex flex-col  max-w-[30.625rem] gap-5 '>
                            {/* 첫 번째 열 */}
                            <div className="bg-white  shadow-[0px_1px_1px_#D8D8D8BF] h-[23.75rem]  ">
                                <div className='p-4'>
                                    <div className='flex gap-2 mb-2 items-end'>
                                        <img src="/Location@2x.png " alt="아이콘" className="w-6 h-6" />
                                        <span className='text-[1rem] lg:text-[1.375rem] leading-[1.0625rem] tracking-[0rem]'>
                                            新東京オフィスの地図はこちら
                                        </span>
                                    </div>
                                    <span className='text-[0.75rem] lg:text-[0.75rem] leading-[1.0625rem] mt-3'>
                                        〒105-0001 港区虎ノ門2-7-16 <br className='lg:hidden' />
                                        エグゼクティブタワー虎ノ門 504
                                    </span>
                                    <MyMap
                                        className="mt-1 lg:mt-3 w-[90%] h-[80%]  lg:w-[100%] lg:h-[100%] justify-center items-center mx-auto"
                                    />
                                </div>


                            </div>

                            {/* 세 번째 열 */}
                            <div className="bg-[#DC5E48] shadow-[0px_1px_1px_#D8D8D8BF] max-h-[19.375rem] lg:h-[19.375rem]">
                                <div className='pr-4 pt-4 pb-4 pl-4  lg:pr-6 lg:pt-6 lg:pl-6 lg:pb-2'>
                                    <Image
                                        src="/title@2x.png"
                                        alt="drunk"
                                        width={307}
                                        height={70}
                                        className='mx-auto max-w-[307px] w-[90%] '
                                    />
                                    <div className='mt-6 flex flex-col gap-1 '>
                                        <span className='text-white  text-[0.75rem] leading-[1.0625rem]  '>
                                            始発まで営業している居酒屋
                                        </span>

                                        <div className="flex flex-row justify-between items-end gap-4">
                                            <div className="flex flex-row items-end gap-1 lg:gap-2">
                                                <Image
                                                    src="/83@2x.png"
                                                    alt="83"
                                                    width={37}
                                                    height={26}
                                                    className=" block w-[80%] h-[80%] max-w-[37px]"
                                                />
                                                <span className="text-white text-[0.875rem] leading-none">件</span>
                                            </div>
                                            <Image
                                                src="/Beer@2x.png"
                                                alt="beer"
                                                width={350}
                                                height={35}
                                                className="block w-[80%] h-[80%] max-w-[350px]"
                                            />
                                        </div>


                                        <span className='mt-6 text-white  text-[0.75rem] tracking-[0.028rem]'>
                                            始発まで営業しているラーメン屋
                                        </span>
                                        <div className='flex flex-row justify-between items-end'>
                                            <div className='flex flex-row items-end gap-1 lg:gap-2'>
                                                <span className=' text-white  text-4xl '>
                                                    9
                                                    <span className='text-white text-[0.875rem] ml-1 lg-ml-1 '>
                                                        件
                                                    </span>
                                                </span>
                                            </div>

                                            <Image
                                                src="/Ramen@2x.png"
                                                alt="ramen"
                                                width={347}
                                                height={25}
                                                className='mx-auto w-[80%] h-[80%] max-w-[347px]'
                                            />
                                        </div>

                                    </div>
                                    <div className="text-right text-[#FFFFFF] tracking-[0.028rem] text-[0.563rem] lg:mt-7 mt-6 ">
                                        ※虎ノ門駅の半径1km以内
                                    </div>
                                </div>
                            </div>

                            {/* 다섯 번째 열 */}
                            <div className="bg-white shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[25rem] ">
                                <div className='p-4'>
                                    <div className='flex gap-2 items-center '>
                                        <Image
                                            src="/camera@2x.png"
                                            alt="camera"
                                            width={36}
                                            height={27}
                                            className=''
                                        />
                                        <span className='text-[1.375rem] leading-[1.063rem] tracking-[-0.01rem]'>フォトギャラリー </span>
                                    </div>

                                    <div className="pt-5 grid lg:grid-cols-4 lg:grid-rows-3 grid-cols-3 grid-rows-4">
                                        <div className="col-span-3 row-span-3">
                                            <Image
                                                src="/photo1@2x.png"
                                                alt="camera"
                                                width={338}
                                                height={310}
                                                className="w-full h-full "
                                            />
                                        </div>

                                        <div className="col-span-1 row-span-1">
                                            <Image
                                                src="/photo2@2x.png"
                                                alt="camera"
                                                width={112}
                                                height={103}
                                                className="w-full h-full "
                                            />
                                        </div>

                                        <div className="col-span-1 row-span-1">
                                            <Image
                                                src="/photo3@2x.png"
                                                alt="camera"
                                                width={112}
                                                height={103}
                                                className="w-full h-full "
                                            />
                                        </div>

                                        <div className="col-span-1 row-span-1">
                                            <Image
                                                src="/photo4@2x.png"
                                                alt="camera"
                                                width={112}
                                                height={103}
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                        <div className='w-full flex flex-col max-w-[30.625rem] gap-5' >
                            {/* 두 번째 열 */}
                            <div className="bg-[#846AB4] shadow-[0px_1px_1px_#D8D8D8BF]   lg:h-[13.75rem]">
                                <div className='p-6'>
                                    <div className='flex gap-4 mb-2 items-center justify-center '>
                                        <img src="/iPhone@2x.png " alt="iPhone" className="w-[1.188rem] h-[1.625rem]" />
                                        <span className='text-[0.95rem] lg:text-[1.375rem] text-center text-white'>
                                            電話・FAX番号が変わりました
                                        </span>
                                    </div>

                                    <Image
                                        src="/tel-fax@2x.png"
                                        alt="toranomon"
                                        width={385}
                                        height={80}
                                        className='pt-8 pb-4 mx-auto w-[100%] h-[100%] max-w-[385px] '
                                    />

                                </div>


                            </div>

                            {/* 네 번째 열 */}
                            <div className="bg-white shadow-[0px_1px_1px_#D8D8D8BF]  lg:h-[33.125rem] p-6">
                                <div className=' '>
                                    <div className='flex gap-2  items-center  '>
                                        <img src="/Business-Graduation-cap-icon@2x.png " alt="iPhone" className="w-[2.75rem] h-[1.875rem]" />
                                        <span className='text-[1.125rem] lg:text-[1.375rem]  '>虎ノ門の由来って？ </span>

                                    </div>

                                    <Image
                                        src="/photo@2x.png"
                                        alt="photo"
                                        width={450}
                                        height={320}
                                        className='pt-4 mx-auto  '
                                    />
                                    <span className='pt-8 text-[0.675rem] lg:text-[0.8rem] leading-[1.25rem] block'>
                                        虎ノ門駅を出てすぐ、<br className='lg:hidden' /> 虎ノ門交差点付近に鎮座するこの銅像。<br />
                                        これ、なんだかお分かりでしょうか？ <br />
                                        そう、猫です。というのは嘘で予想どおり、<br className='lg:hidden' /> 虎です(笑) <br />
                                        虎ノ門だけに虎の銅像なんです！ <br />
                                        そもそもどうして、<br className='lg:hidden' /> ここの地名が「虎ノ門」なのか気になりませんか？
                                    </span>



                                </div>


                            </div>
                            {/* 여섯 번째 열 */}
                            <div className=" bg-[#E9BC06] shadow-[0px_1px_1px_#D8D8D8BF]  lg:h-[21.25rem] ">
                                <div className='pt-2 pb-4 pr-4 pl-4'>
                                    <Image
                                        src="/Pick up foods@2x.png"
                                        alt="food"
                                        width={253}
                                        height={42}
                                        className='pt-4 mx-auto  '

                                    />
                                    <div className="flex gap-4 pt-6  items-center lg:flex-row flex-col justify-center lg:items-start ">
                                        <Image
                                            src="/ramen-photo@2x.png"
                                            alt="ramen-photo"
                                            width={161}
                                            height={204}
                                            className='mx-auto lg-mx-0'
                                        />
                                        <div className="text-center lg:text-left">
                                            <span className=" text-[1.125rem]   tracking-[-0.028125rem] text-white block">
                                                めん徳　二代目つじ田　新橋店<br /><br className='hidden xl:block' />
                                            </span>

                                            <span className=" mt-4 xl:mt-0 text-[0.725rem] lg:text-[0.7rem] xl:text-[0.75rem] tracking-[-0.01875rem] text-white block" >
                                                1月24日にオープンしたばかりのラーメン店。<br />
                                                看板メニューのつけ麺は3段階に進化します。 <br />
                                                最初はそのまま、途中ですだちを絞って爽やかに、 <br />
                                                最後は黒七味をかけてピリっとした風味を楽しんだ <br />
                                                ところで美味しく完食…。といった流れです。 <br /><br className='hidden xl:block' />
                                            </span>

                                            <span className=" mt-4 xl:mt-0 text-[0.725rem] lg:text-[0.7rem] xl:text-[0.75rem] tracking-[-0.01875rem] text-white block " >
                                                弊社スタッフ達も、<br className='lg:hidden' />頻繁に出没しそうな予感がして います。
                                            </span>

                                        </div>


                                    </div>




                                </div>


                            </div>

                        </div>








                    </div>

                </div>


                <div className='text-center  w-full max-w-[62.5rem] mx-auto mt-20 mb-20'>
                    <span className='text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2.25rem] leading-[2rem] tracking-[0.225rem]'>
                        新しくなった東京オフィスへ <br className='sm:hidden' />ぜひお越しください。
                    </span>
                    <Link href="https://ankh-systems.co.jp/">
                        <div className='mt-8 bg-white  bg-no-repeat  shadow-[0px_1px_1px_#D8D8D8BF] h-[6.25rem] flex gap-5 items-center  pr-4' >
                            <div className="flex justify-center items-center w-full gap-5">
                                <Image
                                    src="/green_logo@2x.png"
                                    alt="ank"
                                    width={328}
                                    height={36}
                                    className='w-[80%] h-[80%] max-w-[328px]'
                                />
                                <span className='pt-3 text-center hidden md:block md:text-[1rem] lg:text-[1.0625rem] leading-[1.0625rem]'>
                                    株式会社アンクシステムズ<br className='hidden md:block lg:hidden' /> コーポレートサイトへ
                                </span>
                            </div>
                            <Image
                                src="/arrow@2x.png"
                                alt="arrow"
                                width={6}
                                height={11}
                                className='ml-auto'
                            />
                        </div>
                    </Link>



                </div>


            </section>




            <Footer />
        </>
    );
}