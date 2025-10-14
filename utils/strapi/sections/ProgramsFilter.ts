import { getDataPageFromJSON } from "@/utils/getDataPage";
import { normalizeString } from "@/utils/misc";
import { getFilteredProgramsDetail } from "@/utils/getFilteredProgramsDetail";
import parseEditorRawData from "@/utils/parseEditorRawData";
import type { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Level = {
  data: {
    attributes: {
      title: string;
    };
  };
};

type CurriculumByCampus = {
  campus: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
};

type KnowledgeArea = {
  attributes: {
    name: string;
  };
};

type ProgramModality = {
  modality: {
    data: {
      attributes: {
        name: string;
        label?: string;
      };
    };
  };
  curriculums: Array<CurriculumByCampus>;
};

export type FilterProgram = {
  attributes: {
    name: string;
    slug: string;
    image: StrapiImage;
    level: Level;
    knowledgeAreas: {
      data: Array<KnowledgeArea>;
    };
    programModalities: Array<ProgramModality>;
  };
};

export type ProgramsFilterSection = {
  type: "ComponentSectionsProgramsFilter";
  title?: string;
  descriptionFilter?: BlocksContent;
  modalities?: {
    data: Array<{
      id: string;
      attributes: {
        name: string;
      }
    }>;
  };
  level: {
    data: {
      attributes: {
        title: string;
        programs: {
          data: Array<FilterProgram>;
        };
      };
    };
  };
};

export const PROGRAMS_FILTER = `
... on ComponentSectionsProgramsFilter {
  title
  descriptionFilter:description
  modalities {
    data {
      id
      attributes {
        name
      }
    }
  }
  level {
    data {
      attributes {
        title
        programs(
          pagination: { start: 0, limit: -1 }
          filters: {
            available: { eq: true }
            publishedAt: { notNull: true }
          }
        ) {
          data {
            attributes {
              name
              slug
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              level {
                data {
                  attributes {
                    title
                  }
                }
              }
              knowledgeAreas {
                data {
                  attributes {
                    name
                  }
                }
              }
              programModalities {
                modality {
                  data {
                    attributes {
                      name
                      label
                    }
                  }
                }
                curriculums {
                  campus {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export type StaticProgram = {
  title: string;
  config: {
    hidden?: boolean;
    nombre: string;
    modalidad: Array<string>;
    areaConocimiento: Array<string>;
    campus: Array<string>;
    image: {
      src: string;
      alt: string;
    };
  };
  route: string;
};

const formatStaticProgram = (program: StaticProgram, level: string): FilterProgram => {
  return {
    attributes: {
      name: program?.title,
      slug: program?.route,
      image: {
        data: {
          attributes: {
            url: program?.config?.image?.src,
            alternativeText: program?.config?.image?.alt,
          },
        },
      },
      level: {
        data: {
          attributes: {
            title: level
          }
        }
      },
      knowledgeAreas: {
        data: program?.config?.areaConocimiento?.map(
          (areaConocimiento) => ({ attributes: { name: areaConocimiento } })
        ),
      },
      programModalities: program?.config?.modalidad?.map(
        (modalidad) => ({
          modality: {
            data: {
              attributes: {
                name: modalidad,
              },
            },
          },
          curriculums: program?.config?.campus?.map((campus) => ({
            campus: {
              data: {
                attributes: {
                  name: campus,
                },
              },
            },
          })),
        })
      ),
    },
  };
}

export const formatProgramsFilterSection = async (
  section: ProgramsFilterSection
): Promise<ProgramsFilterSection> => {
  
  const levelAttributes = section?.level?.data?.attributes;

  const levelTitle = normalizeString(levelAttributes?.title);
  
  const programModalityNames = section?.modalities?.data?.map(modality => modality?.attributes?.name);
  const programsData = await getFilteredProgramsDetail({ level: levelAttributes?.title, modalities: programModalityNames });

  let staticPrograms: Array<StaticProgram> = [];
  try {
    const staticProgramsData = await getDataPageFromJSON(`/oferta-educativa/${levelTitle?.toLowerCase()}.json`);
    staticPrograms = staticProgramsData?.programs || [];
  }
  catch {
    //static programs is empty for this level
  }
  const availableStaticPrograms = staticPrograms?.filter(program => !program?.config?.hidden);

  /**
   * Format programs coming from static JSON data into the program structure expected
   * from Stapi-captured programs.
   */
  const formattedStaticPrograms: Array<FilterProgram> = availableStaticPrograms?.map((staticProgram) => {
    return formatStaticProgram(staticProgram, levelAttributes?.title)
  });

  levelAttributes.programs.data = [
    ...programsData,
    ...formattedStaticPrograms,
  ];

  if(section?.descriptionFilter) {
    section.descriptionFilter = section?.descriptionFilter;
  }

  return section;
};