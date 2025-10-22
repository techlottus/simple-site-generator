
export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type OverlayCard = {
  title: string;
  url: string;
  overlayColor: string;
  image: StrapiImage;
};

export type OverlayCardListSection = {
  type: "ComponentSectionsOverlayCardList";
  title: string;
  overlayCards: Array<OverlayCard>;
};

export const OVERLAY_CARD_LIST = `
...on ComponentSectionsOverlayCardList {
  title
  overlayCards(pagination: {start: 0, limit: -1}) {
    title
    url
    overlayColor
    image {
      data {
        attributes {
          url
        }
      }
    }
  }
}
`;