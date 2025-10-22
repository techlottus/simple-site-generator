'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@design-system/components/Button/Button";
import Image from "@design-system/components/Image/Image";
import Aspect from "@design-system/components/Aspect/Aspect";
import cn from "classnames";
import type { FC } from "react";

type SliderPortalverseProps = {
  data?: any;
  onBtn?: any;
  classNames?: string;
  mobile?: boolean;
};

const validateTextPosition = (textPosition: string, position: string) => {
  return !!textPosition?.split("_")?.[0]?.includes(position);
};

const SliderPortalverse: FC<SliderPortalverseProps> = (
  {
    data,
    onBtn,
    classNames,
    mobile = false
  }: SliderPortalverseProps
) => {
  const router = useRouter()

  const stylesBaseControls = "w-p:hidden select-none absolute top-1/2 p-1 rounded-lg text-xs";

  const [active, setActive] = useState<number>(0);
  const [countItems, setCountItems] = useState<number>(0);
  const [slides, setSlides] = useState<Array<any>>([]);
  const [changeDetect, setChangeDetect] = useState<number>(0);
  const [wMob, setWMob] = useState<string>("0px");
  const [dir, setDir] = useState<any>({ xDown: null, yDown: null })
  const [typeDir, setTypeDir] = useState<any>(null)
  const [flag, setFlag] = useState<any>(false)

  const detectResize = () => {
    setChangeDetect((prevState: number) => prevState + 1);
  }

  const getTouches = (evt: any) => {
    return evt.touches ||             // browser API
      evt.originalEvent.touches; // jQuery
  }

  const handleTouchMove = (evt: any) => {
    setDir((val: any) => {
      if (!val?.xDown || !val?.yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = val?.xDown - xUp;
      var yDiff = val?.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
          setTypeDir("left")
          /* right swipe */
        } else {
          setTypeDir("right")
          /* left swipe */
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
        } else {
          /* up swipe */
        }
      }
      /* reset values */
      return { xDown: null, yDown: null }
    })

  };

  const handleTouchStart = (evt: any) => {
    const firstTouch = getTouches(evt)[0];
    setDir({ xDown: firstTouch.clientX, yDown: firstTouch.clientY })
  }

  useEffect(() => {
    let ignore = false
    if (mobile) {
      ignore = true
      document.querySelector("#sectionRef")?.addEventListener('touchstart', handleTouchStart, false);
      document.querySelector("#sectionRef")?.addEventListener('touchmove', handleTouchMove, false)
    }
    setFlag(true)
    detectResize();
    window.addEventListener('resize', detectResize);
    return () => {
      ignore = true
      window.removeEventListener('resize', detectResize);
      document.querySelector("#sectionRef")?.removeEventListener("touchstart", handleTouchStart)
      document.querySelector("#sectionRef")?.removeEventListener("touchmove", handleTouchMove)

    }
  }, []);

  useEffect(() => {
    const { outerWidth } = window;
    if (outerWidth < 600) {
      setWMob(`${outerWidth}px`)
    }
  }, [changeDetect]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCountItems(data.slides.length);
    setSlides([...data.slides]);
  }, [data])

  useEffect(() => {
    if (typeDir !== null) {
      handlerClickControl({ target: { ariaLabel: null } })
      setTypeDir(null)
    }
  }, [typeDir])

  useEffect(() => {
    if (slides.length > 0 && !flag) {
      setFlag(true)
    }

  }, [slides, flag])

  const onBtnSlider = () => {
    if (!!onBtn) {
      onBtn();
    }
  }

  const handlerClickControl = ({ target }: any) => {
    const { ariaLabel } = target
    if (countItems > 1) {
      if (ariaLabel === "next" || typeDir === "left") {
        if (active === countItems - 1) {
          setActive(0);
          return
        }
        if (active < countItems) {
          setActive((prevState: number) => prevState + 1);
          return
        }
      }

      if (ariaLabel === "prev" || typeDir === "right") {
        if (active === 0) {
          setActive(countItems - 1);
          return
        }
        if (active > 0) {
          setActive((prevState: number) => prevState - 1);
          return
        }
      }
    }
  };

  const activeBulletSlide = (position: number) => setActive(position);

  return <section className="relative z-0 w-p:shadow-lg">
    {/* desktop */}
    <div className="w-p:hidden">
      <Aspect ratio="2/1">
        <div className="w-full h-full">
          <div
            aria-label="prev"
            onClick={handlerClickControl}
            className={cn(
              "flex justify-center items-center z-20 left-8 w-14 h-14",
              { "bg-surface-0/50 cursor-pointer": countItems > 1 }
              , stylesBaseControls
            )}
          >
            <span className="material-symbols-outlined ml-2 pointer-events-none select-none">arrow_back_ios</span>
          </div>
          <section className="w-full h-full flex overflow-hidden">
            {
              slides?.map((item: any, i: number) => {
                const textPositionClasses = cn({
                  ["text-left"]: validateTextPosition(item?.textPosition, "left"),
                  ["text-center"]: validateTextPosition(item?.textPosition, "center"),
                  ["text-right"]: validateTextPosition(item?.textPosition, "right")
                });

                return (<div key={`slide-item-${i}`} style={{ "transition": "left 0.5s ease-out", "left": `${active === 0 ? 0 : `-${active * 100}%`}` }} className={cn("w-full h-full relative flex flex-col shrink-0")}>
                  <Image classNames="w-t:hidden w-full h-full absolute z-1" classNamesImg="w-full h-full object-cover" src={item.urlImage.desktop} alt="image" />
                  <Image classNames="w-d:hidden w-full h-full absolute z-1" classNamesImg="w-full h-full object-cover" src={item.urlImage.tablet} alt="image" />
                  <div className={cn("flex absolute z-10 pt-12 pb-16 px-32 w-full h-full", {
                    "text-surface-0": item?.contentVariant === "light",
                    ["justify-start items-start"]: item?.textPosition === "left_top",
                    ["justify-center items-start"]: item?.textPosition === "center_top",
                    ["justify-end items-start"]: item?.textPosition === "right_top",
                    ["justify-start items-center"]: item?.textPosition === "left_center",
                    ["justify-center items-center"]: item?.textPosition === "center",
                    ["justify-end items-center"]: item?.textPosition === "right_center",
                    ["justify-start items-end"]: item?.textPosition === "left_bottom",
                    ["justify-center items-end"]: item?.textPosition === "center_bottom",
                    ["justify-end items-end"]: item?.textPosition === "right_bottom"
                  })}>
                    <div className="flex flex-col z-10 w-d:w-125 w-t:w-96 space-y-4">
                      <h3
                        className={cn(
                          "font-headings font-bold w-d:text-10 w-d:leading-12 w-t:text-7.5 w-t:leading-9",
                          textPositionClasses
                        )}
                      >
                        {item?.title}
                      </h3>
                      <p
                        className={cn(
                          "font-headings font-semibold w-d:text-4.5 w-d:leading-6 w-t:text-base w-t:leading-5",
                          textPositionClasses
                        )}
                      >
                        {item?.text}
                      </p>
                      {
                        !!item?.action?.title
                          ? <div className={cn("w-full flex", {
                            ["justify-center"]: item?.textPosition === "center_top" || item?.textPosition === "center" || item?.textPosition === "center_bottom",
                            ["justify-start"]: item?.textPosition === "left_top" || item?.textPosition === "left_bottom",
                            ["justify-end"]: item?.textPosition === "right_top" || item?.textPosition === "right_bottom" || item?.textPosition === "right_center",
                          })}>
                            <Button
                              variant={item?.contentVariant === "light" ? "outline" : "solid"}
                              size={item?.action?.size}
                              onClick={() => router.push(`${item.action.redirect}`)}
                            >{item?.action?.title}</Button>
                          </div>
                          : null
                      }
                    </div>
                  </div>
                  {
                    item?.overlayWhite || item?.overlayDak ?
                      <div className={cn("absolute w-full h-full", classNames, {
                        "bg-surface-0 opacity-50": item.overlayWhite,
                        "bg-surface-950 opacity-50": item.overlayDak
                      })}></div>
                      : null
                  }
                </div>)
              })
            }
            <div className={cn("w-full flex justify-center absolute bottom-10 space-x-2 z-20")}>
              {
                slides?.map((_: any, i: number) => <div key={`bullet-item-${i}`} onClick={() => activeBulletSlide(i)} className={cn("h-4 bg-surface-500 rounded-full cursor-pointer", { "w-4": i !== active, "w-8": i === active })} />)
              }
            </div>
          </section>
          <div
            aria-label="next"
            onClick={handlerClickControl}
            className={cn(
              "flex justify-center items-center z-10 right-8 w-14 h-14",
              { "bg-surface-0/50 cursor-pointer": countItems > 1 }, stylesBaseControls
            )}
          >
            <span className="material-symbols-outlined ml-0.5 pointer-events-none select-none">arrow_forward_ios</span>
          </div>
        </div>
      </Aspect>
    </div>
    {/* desktop */}

    {/* mobile */}
    <section id="sectionRef" className={cn("w-full h-auto flex overflow-hidden w-d:hidden w-t:hidden")}>
      {
        slides?.map((item: any, i: number) => <div key={`slide-item-${i}`} style={{ "transition": "left 0.5s ease-out", "left": `${active === 0 ? 0 : `-${active * 100}%`}` }} className={cn("w-full h-auto relative flex flex-col shrink-0")}>
          <Aspect ratio="1/1">
            <Image classNames="w-full h-full" classNamesImg="w-full h-full object-cover" src={item.urlImage.mobile} alt="image" />
          </Aspect>
          {
            item?.title || item?.text ?
              <div className="p-4 flex flex-col space-y-6">
                {item?.title ? <h3
                  className="font-headings font-bold w-t:font-normal text-6 w-t:text-6.5 leading-8 w-t:leading-10"
                >
                  {item.title}
                </h3> : null}
                {item?.text ? <p className="font-texts font-normal text-base leading-5">{item.text}</p> : null}
                {
                  !!item?.action?.title
                    ? <Button
                              variant={item?.contentVariant === "light" ? "outline" : "solid"}
                              size={item?.action?.size}
                              onClick={() => router.push(`${item.action.redirect}`)}
                            >{item?.action?.title}</Button>
                    : null
                }
              </div>
              : null
          }
        </div>)
      }
    </section>
    {
    slides.length > 1 ?
      <div className={cn("w-full flex justify-center space-x-2 mt-4 pb-5 w-t:pb-4 w-d:hidden w-t:hidden")}>
        {
          slides?.map((_: any, i: number) => <div key={`bullet-item-${i}`} onClick={() => activeBulletSlide(i)} className={cn("h-4 bg-surface-400 rounded-full cursor-pointer", { "w-4": i !== active, "w-8": i === active })} />)
        }
      </div>
      : null
      }
    {/* mobile */}
  </section>
};

export default SliderPortalverse;
