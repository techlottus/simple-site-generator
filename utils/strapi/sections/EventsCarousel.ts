import { EventAttributes } from "@/utils/getEvents";
type Attributes = EventAttributes['attributes']
interface Events extends Attributes {
  id: string;
}

export type EventCarousselSection = {
  type: "ComponentSectionsEventsCardContainer";
  title: string;
  max_entries: number;
  events? : Events[]
};

export const EVENT_CAROUSSEL = `
...on ComponentSectionsEventsCardContainer {
  title
  max_entries
}
`;