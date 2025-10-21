import Alert from "@/components/sections/Alert";
import BannerCardsSection from "@/components/sections/BannerCards";
import ColorCardList from "@/components/sections/ColorCardsList";
import ContactTargetList from "@/components/sections/ContactTargetList";
import GoogleMap from "@/components/sections/GoogleMap";
import HeroSlider from "@/components/sections/HeroSlider";
import IconTextListImage from "@/components/sections/IconTextImageList";
import IntroductionImage from "@/components/sections/IntroductionImage";
import Leaderboard from "@/components/sections/Leaderboard";
import LinkList from "@/components/sections/LinkList";
import OutstandingList from "@/components/sections/OutstandingList";
import RichTextImage from "@/components/sections/RichTextImage";
import RichTextImageBgImage from "@/components/sections/RichTextImageBgImage";
import RichTextVideo from "@/components/sections/RichTextVideo";
import TableSection from "@/components/sections/TableSection";
import TextContent from "@/components/sections/TextContent";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import VideosSection from "@/components/sections/VideosSection";
import VideoImage from "@/components/sections/VideoImage";
import WebError from "@/components/sections/WebError";
import { type FC } from "react";
import CarouselCards from "@/components/sections/CarouselCards";

type Renderer = {
  [key: string]: FC<any>;
};

const defaultRenderers: Renderer = {
  ComponentSectionsAlert: Alert,
  ComponentSectionsBannerCards: BannerCardsSection,
  ComponentSectionsColorCardList: ColorCardList,
  ComponentSectionsContactTargetList: ContactTargetList,
  ComponentSectionsGoogleMap: GoogleMap,
  ComponentSectionsHeroSlider: HeroSlider,
  ComponentSectionsIconTextListImage: IconTextListImage,
  ComponentSectionsIntroductionImage: IntroductionImage,
  ComponentSectionsLeaderboard: Leaderboard,
  ComponentSectionsLinkList: LinkList,
  ComponentSectionsContainerOutstandingList: OutstandingList,
  ComponentSectionsRichTextImage: RichTextImage,
  ComponentSectionsRichTextImageBgImage: RichTextImageBgImage,
  ComponentSectionsRichTextVideo: RichTextVideo,
  ComponentSectionsTable: TableSection,
  ComponentSectionsTextContent: TextContent,
  ComponentSectionsTestimonialSlider: TestimonialSlider,
  ComponentSectionsVideos: VideosSection,
  ComponentSectionsVideoImage: VideoImage,
  ComponentSectionsWebError: WebError,
  ComponentSectionsEventsCardContainer: CarouselCards
};

export default defaultRenderers;
