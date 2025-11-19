import Container from "@/layouts/Container.layout";
import NumbersPortalverseWrapper from "@/components/sections/NumbersPortalverseWrapper";
import type { StatisticsCardListSection } from "@/utils/strapi/sections/Numbers";

const StatisticsCardList = (props: StatisticsCardListSection) => {
  const { statisticsCards: cards } = props;

  return (
      <Container>
        {
          cards?.length > 0
            ? <div
                className="grid mobile:!grid-cols-1 tablet:!grid-cols-2 gap-6"
                style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}
              >
                {
                  cards?.map((card, i) => {
                    return (
                      <div key={i}>
                        <NumbersPortalverseWrapper
                          data={card}
                          classNames="justify-start"
                        />
                      </div>
                    );
                  })
                }
              </div>
            : null
        }
      </Container>
  );
};

export default StatisticsCardList;