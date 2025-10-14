import { ACCORDION_SECTION } from "@/utils/strapi/sections/Accordion";
import { ALERT } from "@/utils/strapi/sections/Alert";
import { BANNER } from "@/utils/strapi/sections/Banner";
import { BANNER_CARDS } from "@/utils/strapi/sections/BannerCards";
import { BANNER_NUMERALIA } from "@/utils/strapi/sections/BannerNumeralia";
import { BLOG_POSTS_PODCAST } from "@/utils/strapi/sections/BlogPostsPodcast";
import { CARD_LIST } from "@/utils/strapi/sections/CardList";
import { CARD_STATISTICS } from "@/utils/strapi/sections/CardsStatistics";
import { CARDS_DETAIL_CONTENT } from "@/utils/strapi/sections/CardsDetailContent";
import { CARDS_VIDEO_CONTENT } from "@/utils/strapi/sections/CardsVideoContent";
import { CAROUSEL_SECTION } from "@/utils/strapi/sections/Carousel";
import { CATEGORY_ACCORDION_CONTENT } from "@/utils/strapi/sections/CategoryAccordionList";
import { COLOR_CARD_LIST } from "@/utils/strapi/sections/ColorCardsList";
import { CONTACT_TARGET_LIST } from "@/utils/strapi/sections/ContactTargetList";
import { EXTERNAL_POST_BY_CATEGORY_LIST } from "@/utils/strapi/sections/ExternalPostByCategoryList";
import { CONT_ED_PROGRAMS } from "@/utils/strapi/sections/ContEdPrograms";
import { FAQ_SECTION } from "@/utils/strapi/sections/FAQ";
import { FAQ_IMAGE } from "@/utils/strapi/sections/FaqImage";
import { FORM_CONTAINER } from "@/utils/strapi/sections/ContainerForm";
import { GOOGLE_MAP } from "@/utils/strapi/sections/GoogleMap";
import { GRADUATES_FORM } from "@/utils/strapi/sections/GraduatesFormData";
import { HERO_SLIDER } from "@/utils/strapi/sections/HeroSlider";
import { KNOWLEDGE_AREA_FILTER } from "@/utils/strapi/sections/KnowledgeAreaFilter";
import { ICON_TEXT_LIST_IMAGE } from "@/utils/strapi/sections/IconTextListImage";
import { INTRODUCTION_IMAGE_SECTION } from "@/utils/strapi/sections/IntroductionImage";
import { LEADERBOARD } from "@/utils/strapi/sections/Leaderboard";
import { LINK_LIST } from "@/utils/strapi/sections/LinkList";
import { LIST_CONFIG } from "@/utils/strapi/sections/Listconfig";
import { MODALITY_FILTER } from "@/utils/strapi/sections/ModalityFilter";
import { MOSAIC } from "@/utils/strapi/sections/Mosaic";
import { OUTSTANDING_LIST } from "@/utils/strapi/sections/OutstandingList";
import { OVERLAY_CARD_LIST } from "@/utils/strapi/sections/OverlayCardList";
import { PODCAST_LIST } from "@/utils/strapi/sections/PodcastList";
import { PROGRAM_ACCORDION_LIST, } from "@/utils/strapi/sections/ProgramAccordionItems";
import { PROGRAMS_FILTER } from "@/utils/strapi/sections/ProgramsFilter";
import { PROMO_LINK_LIST } from "@/utils/strapi/sections/PromoLinkList";
import { REPEATABLE_BANNER } from "@/utils/strapi/sections/RepeatableBanner";
import { RICH_TEXT_IMAGE } from "@/utils/strapi/sections/RichTextImage";
import { RICHTEXTIMAGE_BGIMAGE } from "@/utils/strapi/sections/RichTextImageBgImage";
import { RICH_TEXT_VIDEO } from "@/utils/strapi/sections/RichTextVideo";
import { ROCKSTARINFO_LIST } from "@/utils/strapi/sections/RockstarInfloList";
import { RVOE_ACCORDION_CONTENT } from "./sections/RvoeAccordionList";
import { STATISTICS_CARD_LIST } from "@/utils/strapi/sections/StatisticsCardList";
import {TABLE} from "@/utils/strapi/sections/TableSection";
import { TABS_LIST } from "./sections/TabList";
import { TEXT_CONTENT } from "@/utils/strapi/sections/TextContent";
import { TESTIMONIAL_SLIDER } from "@/utils/strapi/sections/TestimonialSlider";
import { CONTAINER_TEXT_FORM } from "@/utils/strapi/sections/ContainerTextForm";
import { VIDEOS_SECTION } from "@/utils/strapi/sections/Videos";
import { VIDEO_IMAGE } from "@/utils/strapi/sections/VideoImageSection";
import type { AccordionSection } from "@/utils/strapi/sections/Accordion";
import type { AlertSection } from "@/utils/strapi/sections/Alert";
import type { BannerSection } from "@/utils/strapi/sections/Banner";
import type { BannerCardsData } from "@/utils/strapi/sections/BannerCards";
import type { BannerNumeraliaData } from "@/utils/strapi/sections/BannerNumeralia";
import type { BlogPostsPodcastSection } from "@/utils/strapi/sections/BlogPostsPodcast";
import type { CardListSection } from "@/utils/strapi/sections/CardList";
import type { CardsDetailContentData } from "@/utils/strapi/sections/CardsDetailContent";
import type { CardsStatisticsData } from "@/utils/strapi/sections/CardsStatistics";
import type { CardsVideoContentData } from "@/utils/strapi/sections/CardsVideoContent";
import type { CarouselSection } from "@/utils/strapi/sections/Carousel";
import type { CategoryAccordionListData } from "@/utils/strapi/sections/CategoryAccordionList";
import type { ColorCardListData } from "@/utils/strapi/sections/ColorCardsList";
import type { ContactTargetListSection } from "@/utils/strapi/sections/ContactTargetList";
import type { ContainerForm } from "@/utils/strapi/sections/ContainerForm";
import type { ContEdProgramsSection } from "@/utils/strapi/sections/ContEdPrograms";
import type { ExternalPostListData } from "@/utils/strapi/sections/ExternalPostByCategoryList";
import type { FAQSection } from "@/utils/strapi/sections/FAQ";
import type { FaqImageSection } from "@/utils/strapi/sections/FaqImage";
import type { GoogleMapSection } from "@/utils/strapi/sections/GoogleMap";
import type { GraduatesFormData } from "@/utils/strapi/sections/GraduatesFormData";
import type { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider";
import type { IconTextListImageType } from "@/utils/strapi/sections/IconTextListImage";
import type { IntroductionImageSection } from "@/utils/strapi/sections/IntroductionImage";
import type { KnowledgeAreaFilterSection } from "@/utils/strapi/sections/KnowledgeAreaFilter";
import type { LeaderboardSection } from "@/utils/strapi/sections/Leaderboard";
import type { LinkListSection } from "@/utils/strapi/sections/LinkList";
import type { ListconfigSection } from "@/utils/strapi/sections/Listconfig";
import type { ModalityFilterSection } from "@/utils/strapi/sections/ModalityFilter";
import type { MosaicSectionType } from "@/utils/strapi/sections/Mosaic";
import type { ProgramAccordionListSection } from "@/utils/strapi/sections/ProgramAccordionItems";
import type { OutstandingListSection } from "@/utils/strapi/sections/OutstandingList";
import type { PodcastListSection } from "@/utils/strapi/sections/PodcastList";
import type { ProgramsFilterSection } from "@/utils/strapi/sections/ProgramsFilter";
import type { PromoLinkListSection } from "@/utils/strapi/sections/PromoLinkList";
import type { RepeatableBanner } from "@/utils/strapi/sections/RepeatableBanner";
import type { RichTextImageSection } from "@/utils/strapi/sections/RichTextImage";
import type { RichTextImageBgImageSection } from "@/utils/strapi/sections/RichTextImageBgImage";
import type { RichTextVideoSection } from "@/utils/strapi/sections/RichTextVideo";
import type { RockstarInfoListSection } from "@/utils/strapi/sections/RockstarInfloList";
import type { RvoeAccordionListData } from "./sections/RvoeAccordionList";
import type { StatisticsCardListSection } from "@/utils/strapi/sections/StatisticsCardList";
import type { TableSectionType } from "@/utils/strapi/sections/TableSection";
import type { TabList } from "@/utils/strapi/sections/TabList";
import type { TextContentSection } from "@/utils/strapi/sections/TextContent";
import type { TestimonialSliderData } from "@/utils/strapi/sections/TestimonialSlider";
import type { ContainerTextFormSection } from "@/utils/strapi/sections/ContainerTextForm";
import type { VideosSectionData } from "@/utils/strapi/sections/Videos";
import type { VideoImageData } from "@/utils/strapi/sections/VideoImageSection";

export type ComponentSection =
  | AccordionSection
  | AlertSection
  | BannerCardsData
  | BannerSection
  | BannerNumeraliaData
  | BlogPostsPodcastSection
  | CardListSection
  | CardsDetailContentData
  | CardsStatisticsData
  | CardsVideoContentData
  | CategoryAccordionListData
  | ColorCardListData
  | ContactTargetListSection
  | ContainerForm
  | ContEdProgramsSection
  | ExternalPostListData
  | FAQSection
  | GoogleMapSection
  | GraduatesFormData
  | HeroSliderSection
  | IconTextListImageType
  | IntroductionImageSection
  | KnowledgeAreaFilterSection
  | LeaderboardSection
  | LinkListSection
  | ListconfigSection
  | ModalityFilterSection
  | MosaicSectionType
  | OutstandingListSection
  | PodcastListSection
  | ProgramAccordionListSection
  | ProgramsFilterSection
  | PromoLinkListSection
  | RepeatableBanner
  | RichTextImageSection
  | RichTextImageBgImageSection
  | RichTextVideoSection
  | RockstarInfoListSection
  | RvoeAccordionListData
  | StatisticsCardListSection
  | TableSectionType
  | TabList
  | TextContentSection
  | TestimonialSliderData
  | ContainerTextFormSection
  | VideosSectionData
  | VideoImageData
  | CarouselSection
  | FaqImageSection

  export const SECTIONS = `
  ${ACCORDION_SECTION}
  ${ALERT}
  ${BANNER}
  ${BANNER_CARDS}
  ${BANNER_NUMERALIA}
  ${BLOG_POSTS_PODCAST}
  ${CARD_LIST} 
  ${CARD_STATISTICS}
  ${CARDS_DETAIL_CONTENT}
  ${CARDS_VIDEO_CONTENT}
  ${CATEGORY_ACCORDION_CONTENT}
  ${COLOR_CARD_LIST}
  ${CONTACT_TARGET_LIST}
  ${CONT_ED_PROGRAMS}
  ${EXTERNAL_POST_BY_CATEGORY_LIST}
  ${FAQ_SECTION}
  ${FAQ_IMAGE}
  ${FORM_CONTAINER}
  ${CONTAINER_TEXT_FORM}
  ${GOOGLE_MAP}
  ${GRADUATES_FORM}
  ${HERO_SLIDER}
  ${ICON_TEXT_LIST_IMAGE}
  ${INTRODUCTION_IMAGE_SECTION}
  ${KNOWLEDGE_AREA_FILTER}
  ${LINK_LIST}
  ${LIST_CONFIG}
  ${LEADERBOARD}
  ${MODALITY_FILTER}
  ${MOSAIC}
  ${OUTSTANDING_LIST}
  ${OVERLAY_CARD_LIST}
  ${PODCAST_LIST}
  ${PROGRAM_ACCORDION_LIST}
  ${PROGRAMS_FILTER}
  ${PROMO_LINK_LIST}
  ${REPEATABLE_BANNER}
  ${RICH_TEXT_IMAGE}
  ${RICHTEXTIMAGE_BGIMAGE}
  ${RICH_TEXT_VIDEO}
  ${ROCKSTARINFO_LIST}
  ${RVOE_ACCORDION_CONTENT}
  ${STATISTICS_CARD_LIST}
  ${TABLE}
  ${TABS_LIST}
  ${TEXT_CONTENT}
  ${TESTIMONIAL_SLIDER}
  ${VIDEOS_SECTION}
  ${VIDEO_IMAGE}
  ${CAROUSEL_SECTION}
  `;