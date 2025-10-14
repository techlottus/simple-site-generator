import AccordionComponent from "@/components/sections/AccordionSection";
import Alert from "@/components/sections/Alert";
import Banner from "@/components/sections/Banner";
import BannerCardsSection from "@/components/sections/BannerCards";
import BannerNumeraliaSection from "@/components/sections/BannerNumeraliaSection";
import CardList from "@/components/sections/CardList";
import CardsStatistics from "@/components/sections/CardsStatistics";
import CardsDetailContent from "@/components/sections/CardsDetailContent";
import CardsVideoContent from "@/components/sections/CardsVideoContent";
import ColorCardList from "@/components/sections/ColorCardsList";
import ContactTargetList from "@/components/sections/ContactTargetList";
import ContainerTextForm from "@/components/sections/ContainerTextForm";
import ContEdPrograms from "@/components/sections/ContEdPrograms";
import ExternalPostByCategoryList from "@/components/sections/ExternalPostByCategoryList";
import FAQ from "@/components/sections/FAQ";
import FormVideo from "@/components/sections/FormVideo";
import GoogleMap from "@/components/sections/GoogleMap";
import GraduatesFormSection  from "@/components/sections/GraduatesFormSection";
import HeroSlider from "@/components/sections/HeroSlider";
import IconTextListImage from "@/components/sections/IconTextImageList";
import IntroductionImage from "@/components/sections/IntroductionImage";
import KnowledgeAreaFilter from "@/components/sections/KnowledgeAreaFilter";
import Leaderboard from "@/components/sections/Leaderboard";
import LinkList from "@/components/sections/LinkList";
import Listconfig from "@/components/sections/Listconfig";
import ModalityFilter from "@/components/sections/ModalityFilter";
import MosaicSection from "@/components/sections/MosaicSection";
import OutstandingList from "@/components/sections/OutstandingList";
import OverlayCardList from "@/components/sections/OverlayCardList";
import PodcastList from "@/components/sections/PodcastList";
import ProgramAccordionList from "@/components/sections/ProgramAccordionList";
import ProgramsFilter from "@/components/sections/ProgramsFilter";
import PromoLinkList from "@/components/sections/PromoLinkList";
import RepeatableBannerSection from "@/components/sections/RepeatableBannerSection";
import RichTextImage from "@/components/sections/RichTextImage";
import RichTextImageBgImage from "@/components/sections/RichTextImageBgImage";
import RichTextVideo from "@/components/sections/RichTextVideo";
import RockstarInfo from "@/components/sections/RockstarInfo";
import RockstarInfoList from "@/components/sections/RockstarInfoList";
import RvoeAccordionList from "@/components/sections/RvoeAccordionList";
import StatisticsCardList from "@/components/sections/StatisticsCardList";
import TableSection from "@/components/sections/TableSection";
import Tabs from "@/components/sections/TabList";
import TextContent from "@/components/sections/TextContent";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import VideosSection from "@/components/sections/VideosSection";
import VideoImage from "@/components/sections/VideoImage";
import WebError from "@/components/sections/WebError";
import { type FC } from "react";
import Carousel from "@/components/sections/Carousel";
import CarouselCards from "@/components/sections/CarouselCards";

type Renderer = {
  [key: string]: FC<any>;
};

const defaultRenderers: Renderer = {
  ComponentSectionsAccordion: AccordionComponent,
  ComponentSectionsAlert: Alert,
  ComponentSectionsBanner: Banner,
  ComponentSectionsBannerCards: BannerCardsSection,
  ComponentSectionsBannerNumeralia: BannerNumeraliaSection,
  ComponentSectionsCardList: CardList,
  ComponentSectionsCardsStatistics: CardsStatistics,
  ComponentSectionsCardsDetailContent: CardsDetailContent,
  ComponentSectionsCardsVideoContent: CardsVideoContent,
  ComponentSectionsColorCardList: ColorCardList,
  ComponentSectionsContactTargetList: ContactTargetList,
  ComponentSectionsContEdPrograms: ContEdPrograms,
  ComponentSectionsExternalPostByCategoryList: ExternalPostByCategoryList,
  ComponentSectionsFaqSection: FAQ,
  ComponentSectionsFormVideo: FormVideo,
  ComponentSectionsGoogleMap: GoogleMap,
  ComponentSectionsGraduatesForm: GraduatesFormSection,
  ComponentSectionsHeroSlider: HeroSlider,
  ComponentSectionsIconTextListImage: IconTextListImage,
  ComponentSectionsIntroductionImage: IntroductionImage,
  ComponentSectionsKnowledgeAreaFilter: KnowledgeAreaFilter,
  ComponentSectionsLeaderboard: Leaderboard,
  ComponentSectionsLinkList: LinkList,
  ComponentSectionsListconfig: Listconfig,
  ComponentSectionsModalityFilter: ModalityFilter,
  ComponentSectionsMosaic: MosaicSection,
  ComponentSectionsContainerOutstandingList: OutstandingList,
  ComponentSectionsOverlayCardList: OverlayCardList,
  ComponentSectionsPodcastList: PodcastList,
  ComponentSectionsProgramAccordionList: ProgramAccordionList,
  ComponentSectionsProgramsFilter: ProgramsFilter,
  ComponentSectionsPromoLinkList: PromoLinkList,
  ComponentSectionsRepeatableBanner: RepeatableBannerSection,
  ComponentSectionsRichTextImage: RichTextImage,
  ComponentSectionsRichTextImageBgImage: RichTextImageBgImage,
  ComponentSectionsRichTextVideo: RichTextVideo,
  ComponentSectionsRockstarInfo: RockstarInfo,
  ComponentSectionsRockstarInfoList: RockstarInfoList,
  ComponentSectionsRvoeAccordionList: RvoeAccordionList,
  ComponentSectionsStatisticsCardList: StatisticsCardList,
  ComponentSectionsTable: TableSection,
  ComponentOrganismsTabList : Tabs,
  ComponentSectionsTextContent: TextContent,
  ComponentSectionsTestimonialSlider: TestimonialSlider,
  ComponentSectionsVideos: VideosSection,
  ComponentSectionsVideoImage: VideoImage,
  ComponentSectionsWebError: WebError,
  ComponentSectionsCarousel: Carousel,
  ComponentSectionsContainerTextForm: ContainerTextForm,
  ComponentSectionsEventsCardContainer: CarouselCards
};

export default defaultRenderers;
