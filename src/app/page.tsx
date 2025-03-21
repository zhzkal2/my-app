import Footer from '../app/Components/Footer';
import Header from '../app/Components/Header';
import MyMap from '../app/Components/MyMap';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header /> {/* Header */}
      
      <main className="mx-auto w-full items-center justify-center overflow-hidden bg-gray-200 ">
        <section className="mb-10">
          <div className="relative mx-auto max-w-[31.5rem] lg:max-w-[62.5rem]">
            <Image
              src="/main-v@2x.png"
              alt="toranomon"
              width={1000}
              height={500}
              className="w-full"
            />
            <div className="lg: absolute top-4 flex h-[4rem] w-full flex-col items-center justify-center gap-2 bg-black/50 pt-4 pr-5 pb-1 pl-5 sm:h-[6.125rem] md:h-[7.125rem] lg:h-[8.125rem]">
              <h1>
              <Image
                src={'/Hello,TORANOMON@2x.png'}
                alt="toranomon"
                width={642}
                height={61}
                layout=""
                className="mx-auto w-[80%] max-w-[642px] sm:w-[85%] md:w-[90%] lg:w-auto"
              />
              </h1>
              <h2 className="text-center text-[0.6rem] leading-[1.25rem] tracking-[0.03125rem] text-[#FFFFFF] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.563rem] lg:leading-[1.125rem] lg:tracking-[0.078125rem]">
                東京オフィスは、虎ノ門にて新しいスタートを切ります
              </h2>
            </div>
          </div>
        </section>
        <section


           className="mx-auto mt-4 flex max-w-[62.5rem] flex-col items-center justify-center lg:flex-row lg:items-stretch">
            <article className="max-w-[30.625rem] bg-[#07AB74]">
              <Image
                src="/We just moved toTORANOMON4th March 2014@2x.png"
                alt="toranomon"
                width={500}
                height={500}
                className="p-10"
              />
            </article>

            <article className="max-w-[30.625rem] bg-white p-10">
              
                <p className="text-[0.875rem] leading-[2.25rem] tracking-[0.14875rem]">
                  このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し
                  ２０１４年３月４日(火)大安より営業の運びとなりました。
                  新オフィスは、打ち合わせスペースも多くありますので
                  お近くにお越しの際はどうぞお気軽にお立ち寄りください。
                  今後とも弊社をどうぞよろしくお願い申し上げます。
                </p>
            
            </article>
          
          </section>

          <section className="relative mx-auto mt-4 flex w-full max-w-[62.5rem] flex-col items-center justify-center gap-5 lg:flex-row">
            <section className="flex w-full max-w-[30.625rem] flex-col gap-5">
              {/* 1 Col */}
              <article className="h-[23.75rem] bg-white shadow-[0px_1px_1px_#D8D8D8BF] p-4">
                
                  <div className="mb-2 flex items-end gap-2">
                    <Image
                      src="/Location@2x.png"
                      alt="location_icon"
                      width={30}
                      height={30}
                      className=" "
                    />
                    <span className="text-[1rem] leading-[1.0625rem] tracking-[0rem] lg:text-[1.375rem]">
                      新東京オフィスの地図はこちら
                    </span>
                  </div>
                  <address className="mt-3 text-[0.75rem] leading-[1.0625rem] lg:text-[0.75rem]">
                    〒105-0001 港区虎ノ門2-7-16 <br className="lg:hidden" />
                    エグゼクティブタワー虎ノ門 504
                  </address>
                  <MyMap className="mx-auto mt-1 h-[80%] w-[90%] items-center justify-center lg:mt-3 lg:h-[100%] lg:w-[100%]" />
                
              </article>

              {/* 2 Col */}
              <article className="max-h-[19.375rem] bg-[#DC5E48] shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[19.375rem]">
                <div className="pt-4 pr-4 pb-4 pl-4 lg:pt-6 lg:pr-6 lg:pb-2 lg:pl-6">
                  <Image
                    src="/title@2x.png"
                    alt="drunk"
                    width={307}
                    height={70}
                    className="mx-auto w-[90%] max-w-[307px]"
                  />
                  <div className="mt-6 flex flex-col gap-1">
                    <span className="text-[0.75rem] leading-[1.0625rem] text-white">
                      始発まで営業している居酒屋
                    </span>

                    <div className="flex flex-row items-end justify-between gap-4">
                      <div className="flex flex-row items-end gap-1 lg:gap-2">
                        <Image
                          src="/83@2x.png"
                          alt="83"
                          width={37}
                          height={26}
                          className="block h-[80%] w-[80%] max-w-[37px]"
                        />
                        <span className="text-[0.875rem] leading-none text-white">
                          件
                        </span>
                      </div>
                      <Image
                        src="/Beer@2x.png"
                        alt="beer"
                        width={350}
                        height={35}
                        className="block h-[80%] w-[80%] max-w-[350px]"
                      />
                    </div>

                    <span className="mt-6 text-[0.75rem] tracking-[0.028rem] text-white">
                      始発まで営業しているラーメン屋
                    </span>
                    <div className="flex flex-row items-end justify-between">
                      <div className="flex flex-row items-end gap-1 lg:gap-2">
                        <span className="text-4xl text-white">
                          9
                          <span className="lg-ml-1 ml-1 text-[0.875rem] text-white">
                            件
                          </span>
                        </span>
                      </div>

                      <Image
                        src="/Ramen@2x.png"
                        alt="ramen"
                        width={347}
                        height={25}
                        className="mx-auto h-[80%] w-[80%] max-w-[347px]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-right text-[0.563rem] tracking-[0.028rem] text-[#FFFFFF] lg:mt-7">
                    ※虎ノ門駅の半径1km以内
                  </div>
                </div>
              </article>

              {/* 3 Col */}
              <article className="bg-white shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[25rem]">
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/camera@2x.png"
                      alt="camera"
                      width={36}
                      height={27}
                      className=""
                    />
                    <span className="text-[1.375rem] leading-[1.063rem] tracking-[-0.01rem]">
                      フォトギャラリー{' '}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 grid-rows-4 pt-5 lg:grid-cols-4 lg:grid-rows-3">
                    <div className="col-span-3 row-span-3">
                      <Image
                        src="/photo1@2x.png"
                        alt="camera"
                        width={338}
                        height={310}
                        className="h-full w-full"
                      />
                    </div>

                    <div className="col-span-1 row-span-1">
                      <Image
                        src="/photo2@2x.png"
                        alt="camera"
                        width={112}
                        height={103}
                        className="h-full w-full"
                      />
                    </div>

                    <div className="col-span-1 row-span-1">
                      <Image
                        src="/photo3@2x.png"
                        alt="camera"
                        width={112}
                        height={103}
                        className="h-full w-full"
                      />
                    </div>

                    <div className="col-span-1 row-span-1">
                      <Image
                        src="/photo4@2x.png"
                        alt="camera"
                        width={112}
                        height={103}
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </section>

            <section className="flex w-full max-w-[30.625rem] flex-col gap-5">
              {/* 4 Col */}
              <article className="bg-[#846AB4] shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[13.75rem]">
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-center gap-4">
                    <Image
                      src="/iPhone@2x.png"
                      alt="iphone_icon"
                      width={19}
                      height={26}
                      className=" "
                    />
                    <span className="text-center text-[0.95rem] text-white lg:text-[1.375rem]">
                      電話・FAX番号が変わりました
                    </span>
                  </div>

                  <Image
                    src="/tel-fax@2x.png"
                    alt="toranomon"
                    width={385}
                    height={80}
                    className="mx-auto h-[100%] w-[100%] max-w-[385px] pt-8 pb-4"
                  />
                </div>
              </article>

              {/* 5 col */}
              <article className="bg-white p-6 shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[33.125rem]">
                <div className=" ">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Business-Graduation-cap-icon@2x.png"
                      alt="Graduation_cap"
                      width={44}
                      height={30}
                      className=" "
                    />
                    <h3 className="text-[1.125rem] lg:text-[1.375rem]">
                      虎ノ門の由来って？
                    </h3>
                  </div>

                  <Image
                    src="/photo@2x.png"
                    alt="photo"
                    width={450}
                    height={320}
                    className="mx-auto pt-4"
                  />
                  <p className="block pt-8 text-[0.675rem] leading-[1.25rem] lg:text-[0.8rem]">
                    虎ノ門駅を出てすぐ、
                    <br className="lg:hidden" />{' '}
                    虎ノ門交差点付近に鎮座するこの銅像。
                    <br />
                    これ、なんだかお分かりでしょうか？ <br />
                    そう、猫です。というのは嘘で予想どおり、
                    <br className="lg:hidden" /> 虎です(笑) <br />
                    虎ノ門だけに虎の銅像なんです！ <br />
                    そもそもどうして、
                    <br className="lg:hidden" />{' '}
                    ここの地名が「虎ノ門」なのか気になりませんか？
                  </p>
                </div>
              </article>
              {/* 6 col */}
              <article className="bg-[#E9BC06] shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[21.25rem]">
                <div className="pt-2 pr-4 pb-4 pl-4">
                  <Image
                    src="/Pick up foods@2x.png"
                    alt="food"
                    width={253}
                    height={42}
                    className="mx-auto pt-4"
                  />
                  <div className="flex flex-col items-center justify-center gap-4 pt-6 lg:flex-row lg:items-start">
                    <Image
                      src="/ramen-photo@2x.png"
                      alt="ramen-photo"
                      width={161}
                      height={204}
                      className="lg-mx-0 mx-auto"
                    />
                    <p className="text-center lg:text-left">
                      <span className="block text-[1.125rem] tracking-[-0.028125rem] text-white">
                        めん徳　二代目つじ田　新橋店
                        <br />
                        <br className="hidden xl:block" />
                      </span>

                      <span className="mt-4 block text-[0.725rem] tracking-[-0.01875rem] text-white lg:text-[0.7rem] xl:mt-0 xl:text-[0.75rem]">
                        1月24日にオープンしたばかりのラーメン店。
                        <br />
                        看板メニューのつけ麺は3段階に進化します。 <br />
                        最初はそのまま、途中ですだちを絞って爽やかに、 <br />
                        最後は黒七味をかけてピリっとした風味を楽しんだ <br />
                        ところで美味しく完食…。といった流れです。 <br />
                        <br className="hidden xl:block" />
                      </span>

                      <span className="mt-4 block text-[0.725rem] tracking-[-0.01875rem] text-white lg:text-[0.7rem] xl:mt-0 xl:text-[0.75rem]">
                        弊社スタッフ達も、
                        <br className="lg:hidden" />
                        頻繁に出没しそうな予感がして います。
                      </span>
                    </p>
                  </div> 
                </div>
              </article>
            </section>
          </section>


        <section className="mx-auto mt-20 mb-20 w-full max-w-[62.5rem] text-center">
          <p className="text-[1.125rem] leading-[2rem] tracking-[0.225rem] sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2.25rem]">
            新しくなった東京オフィスへ <br className="sm:hidden" />
            ぜひお越しください。
          </p>
          <Link href="https://ankh-systems.co.jp/">
            <div className="mt-8 flex h-[6.25rem] items-center gap-5 bg-white bg-no-repeat pr-4 shadow-[0px_1px_1px_#D8D8D8BF]">
              <div className="flex w-full items-center justify-center gap-5">
                <Image
                  src="/green_logo@2x.png"
                  alt="ank"
                  width={328}
                  height={36}
                  className="h-[80%] w-[80%] max-w-[328px]"
                />
                <p className="hidden pt-3 text-center leading-[1.0625rem] md:block md:text-[1rem] lg:text-[1.0625rem]">
                  株式会社アンクシステムズ
                  <br className="hidden md:block lg:hidden" />{' '}
                  コーポレートサイトへ
                </p>
              </div>
              <Image
                src="/arrow@2x.png"
                alt="arrow"
                width={6}
                height={11}
                className="ml-auto"
              />
            </div>
          </Link>
        </section>
        </main>
      
      <Footer />
    </>
  );
}
