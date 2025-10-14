import { FC } from "react"
import Container from "@/layouts/Container.layout";
import Image from "@/old-components/Image";
import Aspect from "@/components/Aspect";
import  {IntroductionImageSection} from "@/utils/strapi/sections/IntroductionImage";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const IntroductionImage: FC<IntroductionImageSection> = (props: IntroductionImageSection) => {

	const { title, text, images } = props;

	return (
		<section>
			<Container>
				{
					title ?
						<p className="font-headings text-10 leading-12 w-p:text-6 w-p:leading-7">{title}</p>
					: null
				}
				{
					text ?
						<div className="pb-14 w-p:pb-6">
							<RichTextRenderer content={text} />
						</div>
					: null
				}
				{
					images?.length > 0 ?
						<div className="grid gap-6 col-span-1">
							{
								images?.map((item, i) => {
									return (<div key={`section-image-${i}`} >
										<div className="w-p:hidden w-t:hidden">
											<Aspect ratio={item?.desktopRatio}>
												<div className="absolute w-full h-full">
													<Image
														alt={""}
														src={item?.desktopImage?.data?.attributes?.url}
														classNamesImg="w-full h-full object-cover"
														classNames="w-full h-full object-cover" />
												</div>
											</Aspect>
										</div>
										<div className="w-p:hidden w-d:hidden">
											<Aspect ratio={item?.tabletRatio}>
												<div className="absolute w-full h-full">
													<Image
														alt={""}
														src={item?.tabletImage?.data?.attributes?.url}
														classNamesImg="w-full h-full object-cover"
														classNames="w-full h-full object-cover" />
												</div>
											</Aspect>
										</div>
										<div className="w-d:hidden w-t:hidden">
											<Aspect ratio={item?.mobileRatio}>
												<div className="absolute w-full h-full">
													<Image
														alt={""}
														src={item?.mobileImage?.data?.attributes?.url}
														classNamesImg="w-full h-full object-cover"
														classNames="w-full h-full object-cover" />
												</div>
											</Aspect>
										</div>
									</div>)
								})
							}
						</div>
					: null
				}
			</Container>
		</section>
	);
}

export default IntroductionImage