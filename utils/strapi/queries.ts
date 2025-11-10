import { ALERT } from "@/utils/strapi/sections/Alert";
import { BANNER_CARDS } from "@/utils/strapi/sections/BannerCards";
import { CARD_LIST } from "@/utils/strapi/sections/CardList";
import { COLOR_CARD_LIST } from "@/utils/strapi/sections/ColorCardsList";
import { CONTACT_TARGET_LIST } from "@/utils/strapi/sections/ContactTargetList";
import { FAQ_SECTION } from "@/utils/strapi/sections/FAQ";
import { GOOGLE_MAP } from "@/utils/strapi/sections/GoogleMap";
import { HERO_SLIDER } from "@/utils/strapi/sections/HeroSlider";
import { ICON_TEXT_LIST_IMAGE } from "@/utils/strapi/sections/IconTextListImage";
import { INTRODUCTION_IMAGE_SECTION } from "@/utils/strapi/sections/IntroductionImage";
import { LEADERBOARD } from "@/utils/strapi/sections/Leaderboard";
import { LINK_LIST } from "@/utils/strapi/sections/LinkList";
import { NUMBERS } from "./sections/Numbers";
import { OUTSTANDING_LIST } from "@/utils/strapi/sections/OutstandingList";
import { OVERLAY_CARD_LIST } from "@/utils/strapi/sections/OverlayCardList";
import { RICH_TEXT_IMAGE } from "@/utils/strapi/sections/RichTextImage";
import { RICHTEXTIMAGE_BGIMAGE } from "@/utils/strapi/sections/RichTextImageBgImage";
import { RICH_TEXT_VIDEO } from "@/utils/strapi/sections/RichTextVideo";
import {TABLE} from "@/utils/strapi/sections/TableSection";
import { TEXT_CONTENT } from "@/utils/strapi/sections/TextContent";
import { TESTIMONIAL_SLIDER } from "@/utils/strapi/sections/TestimonialSlider";
import { VIDEOS_SECTION } from "@/utils/strapi/sections/Videos";
import { VIDEO_IMAGE } from "@/utils/strapi/sections/VideoImageSection";
import type { AlertSection } from "@/utils/strapi/sections/Alert";
import type { BannerCardsData } from "@/utils/strapi/sections/BannerCards";
import type { CardListSection } from "@/utils/strapi/sections/CardList";
import type { ColorCardListData } from "@/utils/strapi/sections/ColorCardsList";
import type { ContactTargetListSection } from "@/utils/strapi/sections/ContactTargetList";
import type { FAQSection } from "@/utils/strapi/sections/FAQ";
import type { GoogleMapSection } from "@/utils/strapi/sections/GoogleMap";
import type { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider";
import type { IconTextListImageType } from "@/utils/strapi/sections/IconTextListImage";
import type { IntroductionImageSection } from "@/utils/strapi/sections/IntroductionImage";
import type { LeaderboardSection } from "@/utils/strapi/sections/Leaderboard";
import type { LinkListSection } from "@/utils/strapi/sections/LinkList";
import type { StatisticsCard } from "@/utils/strapi/sections/Numbers";
import type { OutstandingListSection } from "@/utils/strapi/sections/OutstandingList";
import type { RichTextImageSection } from "@/utils/strapi/sections/RichTextImage";
import type { RichTextImageBgImageSection } from "@/utils/strapi/sections/RichTextImageBgImage";
import type { RichTextVideoSection } from "@/utils/strapi/sections/RichTextVideo";
import type { TableSectionType } from "@/utils/strapi/sections/TableSection";
import type { TextContentSection } from "@/utils/strapi/sections/TextContent";
import type { TestimonialSliderData } from "@/utils/strapi/sections/TestimonialSlider";
import type { VideosSectionData } from "@/utils/strapi/sections/Videos";
import type { VideoImageData } from "@/utils/strapi/sections/VideoImageSection";

export type ComponentSection =
  | AlertSection
  | BannerCardsData
  | CardListSection
  | ColorCardListData
  | ContactTargetListSection
  | GoogleMapSection
  | HeroSliderSection
  | IconTextListImageType
  | IntroductionImageSection
  | LeaderboardSection
  | LinkListSection
  | StatisticsCard
  | OutstandingListSection
  | RichTextImageSection
  | RichTextImageBgImageSection
  | RichTextVideoSection
  | TableSectionType
  | TextContentSection
  | TestimonialSliderData
  | VideosSectionData
  | VideoImageData

  export const SECTIONS = `
  ${ALERT}
  ${BANNER_CARDS}
  ${CARD_LIST}
  ${COLOR_CARD_LIST}
  ${CONTACT_TARGET_LIST}
  ${FAQ_SECTION}
  ${GOOGLE_MAP}
  ${HERO_SLIDER}
  ${ICON_TEXT_LIST_IMAGE}
  ${INTRODUCTION_IMAGE_SECTION}
  ${LINK_LIST}
  ${LEADERBOARD}
  ${NUMBERS}
  ${OUTSTANDING_LIST}
  ${OVERLAY_CARD_LIST}
  ${RICH_TEXT_IMAGE}
  ${RICHTEXTIMAGE_BGIMAGE}
  ${RICH_TEXT_VIDEO}
  ${TABLE}
  ${TEXT_CONTENT}
  ${TESTIMONIAL_SLIDER}
  ${VIDEOS_SECTION}
  ${VIDEO_IMAGE}
  `;