'use client'
import Container from "@/layouts/Container.layout";
import cn from "classnames";
import Aspect from "@design-system/components/Aspect/Aspect";
import Image from "@design-system/components/Image/Image";
import { Button } from "@design-system/components";
import { useRouter } from "next/navigation";
import { BannerSection } from "@/utils/strapi/sections/Banner";
import { ButtonType } from "@/utils/strapi/sections/BannerCards";

export type BannerPortalverseConfig = {
  image?: {
    mobile: string;
    desktop: string;
    tablet?: string;
  };
  title?: string;
  subtitle?: string;
  position?: string;
  height?: string;
  overlayWhite?: boolean;
  overlayDak?: boolean
  button: ButtonType
  noAction: boolean;
  dimensions?: Array<string>;
  font: string;
  variant?: "sm" | "md" | "lg";
  desktopRatio?: string;
  tabletRatio?: string;
  mobileRatio?: string;
}

const Banner = (props: BannerSection) => {
  const router = useRouter();
  const desktopRatio = props?.desktopRatio || "7/2";
  const tabletRatio = props?.tabletRatio || "7/2";
  const mobileRatio = props?.mobileRatio || "4/3";
  const onClick = () => {
    if (!props?.ctaUrl || !props?.ctaText) return;
    router?.push(props?.ctaUrl);
  }

  const imageDesk = props.desktopImage?.data.attributes.url;
  const imageTablet = props.tabletImage?.data.attributes.url;

  return (
    <section>
      <Container classNames={!props?.ctaText ? "mobile:!p-0 tablet:!p-0" : ""}>
        <>
          {/** Desktop banner */}
          <div className="tablet:hidden mobile:hidden">
            <Aspect ratio={desktopRatio}>
              <div className="w-full h-full">
                <div className={cn(`relative flex w-full h-full shrink-0`)} >
                 <Image classNamesImg="object-cover" classNames="w-full h-full tablet:hidden" src={imageDesk} alt="image" />
                  { imageTablet && <Image classNamesImg="object-cover" classNames="w-full h-full desktop:hidden" src={imageTablet} alt="image" />}
                  {
                    props?.overlay ?
                      <div className={cn("absolute w-full h-full", {
                        "bg-surface-0 opacity-50": props.overlay == 'white',
                        "bg-surface-950 opacity-50": props.overlay == 'black'
                      })}></div>
                      : null
                  }
                  <BannerContent {...props} />
                </div>
              </div>
            </Aspect>
          </div>
          {/** Tablet banner */}
          <div className="desktop:hidden mobile:hidden">
            <Aspect ratio={tabletRatio}>
              <div className="w-full h-full">
                <div className={cn(`relative flex w-full h-full shrink-0`)} >
                  <Image classNamesImg="object-cover" classNames="w-full h-full" src={imageTablet!} alt="image" />
                  {
                    props?.overlay ?
                      <div className={cn("absolute w-full h-full", {
                        "bg-surface-0 opacity-50": props.overlay == 'white',
                        "bg-surface-950 opacity-50": props.overlay == 'black'
                      })}></div>
                      : null
                  }
                  <BannerContent {...props} />
                </div>
              </div>
            </Aspect>
          </div>
          {/** Mobile banner */}
          <div className="desktop:hidden tablet:hidden">
            <Aspect ratio={mobileRatio}>
              <div className="w-full h-full">
                <div className={cn(`relative flex w-full h-full shrink-0`)} >
                  <Image classNamesImg="object-cover" classNames="w-full h-full desktop:hidden tablet:hidden" src={props.mobileImage?.data.attributes.url!} alt={props?.mobileImage?.data.attributes.alternativeText || ""} />
                  <div className={cn("absolute w-full h-full", {
                    "bg-surface-0 opacity-50": props.overlay == 'white',
                    "bg-surface-950 opacity-50": props.overlay == 'black'
                  })}></div>
                  <div className={cn("absolute w-full h-full flex justify-start items-start")}
                  >
                    <div className="p-8">
                      {
                        props?.title
                          ? <h3 className={cn("font-headings font-bold desktop:leading-15 tablet:leading-7.5 mobile:leading-7.5 desktop:text-2xl tablet:text-2xl mobile:text-xl", { "text-surface-0": props.overlay == 'black' || props.contentVariant === "light" })}>{props.title}</h3>
                          : null
                      }
                      {
                        props?.subtitle
                          ? <h3
                            className={cn("font-texts font-normal desktop:leading-5 tablet:leading-4 mobile:leading-4 desktop:text-base tablet:text-sm mobile:text-sm", { "text-surface-0": props.overlay == 'black' || props.contentVariant === "light" })}
                            dangerouslySetInnerHTML={{ __html: String(props.subtitle) }}
                          />
                          : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            </Aspect>
            <div>
              {
                props?.ctaText
                  ? <div className="mt-2">
                    {/* <Button props={{ ...props.button, isExpand: true }} onClick={onClick} /> */}
                    <Button
                      id="cta-banner"
                      type="button"
                      intent='primary'
                      size='sm'
                      variant={'outline'}
                      className="bg-transparent border-surface-50 hover:border-surface-950 hover:bg-surface-50 hover:text-surface-950 text-surface-0 w-full"
                      disabled={false}
                      onClick={onClick}>{props?.ctaText}</Button>
                  </div>
                  : null
              }
            </div>
          </div>
        </>

      </Container>
    </section>
  );
};

type BannerPortalverseTextPosition =
  | "" // maps to left_top position
  | "center"
  | "right"
  | "middle"
  | "middle-left"
  | "middle-right"
  | "middle-center"
  | "left-bottom"
  | "center-bottom"
  | "right-bottom";

const getTextPosition = (
  textPosition: BannerSection["textPosition"]
): BannerPortalverseTextPosition => {
  switch (textPosition) {
    case "center":
      return "middle-center";
    case "center_bottom":
      return "center-bottom";
    case "center_top":
      return "center";
    case "left_bottom":
      return "left-bottom";
    case "left_center":
      return "middle";
    case "left_top":
      return "";
    case "right_bottom":
      return "right-bottom";
    case "right_center":
      return "middle-right";
    case "right_top":
      return "right";
  }
};

const BannerContent = (props: BannerSection) => {
  const router = useRouter()
  const onClick = () => {
    if (!props?.ctaUrl || !props?.ctaText) return;
    router?.push(props?.ctaUrl);
  }

  // const { variant = "lg" } = data;
  const position = getTextPosition(props?.textPosition)
  const renderButton = () => {
    return (
      <>
        {props.overlay == 'black' ? (
          <div
            className={cn("mt-2 flex", {
              "justify-end": position === "right",
              "justify-center": position === "center",
              "items-center justify-center": position === "middle-center",
              "items-center justify-end": position === "middle-right",
              "items-end": position === "left-bottom",
              "items-end justify-center": position === "center-bottom",
              "items-end justify-end": position === "right-bottom",
              "items-start justify-end": position === "right",
            })}
          >
            {/* <Button data={data?.button} onClick={onClick} /> */}
            <Button
              id="cta-banner"
              type="button"
              intent='primary'
              size='sm'
              variant={'solid'}
              className="bg-transparent border-surface-50 hover:border-surface-950 hover:bg-surface-950 hover:text-surface-0 text-surface-0"
              disabled={false}
              onClick={onClick}>{props?.ctaText}</Button>
          </div>
        ) : props.overlay == 'white' ? (
          <div
            className={cn("mt-2 flex", {
              "justify-end": position === "right",
              "justify-center": position === "center",
              "items-center justify-center": position === "middle-center",
              "items-center justify-end": position === "middle-right",
              "items-end": position === "left-bottom",
              "items-end justify-center": position === "center-bottom",
              "items-end justify-end": position === "right-bottom",
              "items-start justify-end": position === "right",
            })}
          >
            {/* <Button data={data.button} onClick={onClick} /> */}
            <Button
              type="button"
              intent='primary'
              size='sm'
              variant={'solid'}
              className="bg-surface-900 border-surface-950 hover:border-surface-950 hover:bg-surface-0 hover:text-surface-950 focus:border-surface-950 focus:bg-surface-0 focus:text-surface-950 text-surface-0" 
              disabled={false}
              onClick={onClick}>{props?.ctaText}</Button>
          </div>
        ) : props.contentVariant === "light" ? (
          <div
            className={cn("mt-2 flex", {
              "justify-end": position === "right",
              "justify-center": position === "center",
              "items-center justify-center": position === "middle-center",
              "items-center justify-end": position === "middle-right",
              "items-end": position === "left-bottom",
              "items-end justify-center": position === "center-bottom",
              "items-end justify-end": position === "right-bottom",
              "items-start justify-end": position === "right",
            })}
          >
            {/* <Button  data={data?.button} onClick={onClick} /> */}
            <Button
              type="button"
              intent='primary'
              size='sm'
              variant={'solid'}
              className="bg-transparent border-surface-50 hover:border-surface-950 hover:bg-surface-950 hover:text-surface-0 text-surface-0"
              disabled={false}
              onClick={onClick}>{props?.ctaText}</Button>
          </div>
        ) : (
          <div
            className={cn("mt-2 flex", {
              "justify-end": position === "right",
              "justify-center": position === "center",
              "items-center justify-center": position === "middle-center",
              "items-center justify-end": position === "middle-right",
              "items-end": position === "left-bottom",
              "items-end justify-center": position === "center-bottom",
              "items-end justify-end": position === "right-bottom",
              "items-start justify-end": position === "right",
            })}
          >
            {/* <Button  data={data?.button} onClick={onClick} /> */}
            <Button
              type="button"
              intent='primary'
              size='sm'
              variant={'solid'}
              className="bg-surface-900 border-surface-950 hover:border-surface-950 hover:bg-surface-0 hover:text-surface-950 focus:border-surface-950 focus:bg-surface-0 focus:text-surface-950 text-surface-0" 
              disabled={false}
              onClick={onClick}>{props?.ctaText}</Button>
          </div>
        )}
      </>
    );
  };

  const desktopTabletContainerClasses = cn("absolute w-full h-full flex", {
    "justify-center text-center": position === "center",
    "justify-end text-right": position === "right",
    "items-center": position === "middle",
    "items-center text-center": position === "middle-left",
    "justify-start items-center": position === "middle",
    "justify-end items-center text-end": position === "middle-right",
    "justify-center items-center text-center": position === "middle-center",
    "justify-start items-end": position === "left-bottom",
    "justify-center items-end text-center": position === "center-bottom",
    "justify-end items-end text-end": position === "right-bottom",
    "justify-end items-start text-end": position === "right",
  });

  return (
    <div className={desktopTabletContainerClasses}>
      <div className="p-10 w-full desktop:max-w-[600px] tablet:max-w-[800px]">
        {
          props?.title
            ? <h3
              className={cn(
                "font-headings font-bold text-wrap desktop:text-3xl tablet:text-2xl mobile:text-2xl desktop:leading-15 tablet:leading-7.5 mobile:leading-7.5",
                {
                  "text-surface-0": props.overlay == 'black' || props.contentVariant === "light",
                  // "desktop:text-6.5 tablet:text-6 mobile:text-6 desktop:leading-15 tablet:leading-7.5 mobile:leading-7.5"
                  // "desktop:text-5.5 tablet:text-5.5 mobile:text-5.5 desktop:leading-15 tablet:leading-7.5 mobile:leading-7.5": variant === "md",
                  // "desktop:text-4 tablet:text-4 mobile:text-4 desktop:leading-15 tablet:leading-7.5 mobile:leading-7.5": variant === "sm"
                }
              )
              }
            >
              {props.title}
            </h3>
            : null
        }
        {
          props?.subtitle
            ? <p
              className={cn(
                "font-texts font-normal text-wrap ", "desktop:leading-6 tablet:leading-4 mobile:leading-4 desktop:text-base tablet:text-sm mobile:text-xs",
                {
                  "text-surface-0": props.overlay == 'black' || props.contentVariant === "light",
                  // "desktop:leading-6 tablet:leading-4 mobile:leading-4 desktop:text-base tablet:text-3.5 mobile:text-3.5": variant === "lg",
                  // "desktop:leading-5 tablet:leading-5 mobile:leading-4 desktop:text-sm tablet:text-3.5 mobile:text-3.5": variant === "md",
                  // "desktop:leading-5 tablet:leading-5 mobile:leading-4 desktop:text-xs tablet:text-3.5 mobile:text-3.5": variant === "sm"
                }
              )
              }
              dangerouslySetInnerHTML={{ __html: String(props.subtitle) }}
            />
            : null
        }
        {
          props?.ctaText
            ? renderButton()
            : null
        }
      </div>
    </div>
  );
};

export default Banner;
