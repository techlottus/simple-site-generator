import { FC, useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/layouts/Container.layout";
import RichtText from "@/old-components/Richtext/Richtext";
import Filter from "@/old-components/Filter/Filter";
import Image from "@/old-components/Image";
import Aspect from "@/components/Aspect";
import routesConfig from "routesConfig.json";
import cn from "classnames";
import type { FilterProgram, ProgramsFilterSection } from "@/utils/strapi/sections/ProgramsFilter";
import { useRouter } from "next/router";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const BUSINESS_UNIT = process.env.NEXT_PUBLIC_BUSINESS_UNIT!;

export const FilterConfig = {
  UANE: {
    campusLabel: "Campus",
  },
  UTEG: {
    campusLabel: "Planteles",
  },
  ULA: {
    campusLabel: "Campus",
  },
  UTC: {
    campusLabel: "Planteles",
  },
  default: {
    campusLabel: "Campus"
  }
};

type FilterKey = "modalities" | "campuses" | "knowledgeAreas";

type Filter =
  | {
      [K in FilterKey]?: Array<string>;
    }
  | null;

const ProgramsFilter: FC<ProgramsFilterSection> = (props: ProgramsFilterSection) => {

  const { title: sectionTitle, descriptionFilter: sectionDescription } = props;

  const levelAttributes = props?.level?.data?.attributes;
  const levelName = levelAttributes?.title;

  const levelRoute = routesConfig?.educationalLevels?.find(educationalLevel => educationalLevel?.name === levelName)?.path;

  const programs = levelAttributes?.programs?.data;
  const sortedPrograms = programs?.slice()?.sort((a, b) => a?.attributes?.name?.localeCompare(b?.attributes?.name));

  const modalities = getProgramsModalities(programs);
  const sortedModalities = modalities?.slice()?.sort((a, b) => a?.label?.localeCompare(b?.label));

  const campuses = getProgramsCampuses(programs);
  const sortedCampuses = campuses?.slice()?.sort((a, b) => a?.localeCompare(b));

  const knowledgeAreas = getProgramsKnowledgeAreas(programs);
  const sortedKnowledgeAreas = knowledgeAreas?.slice()?.sort((a, b) => a?.localeCompare(b));

  const [currentFilter, setCurrentFilter] = useState<Filter>(null);
  const filterConfig = useMemo(() => {
    return {
      modalities: {
        config: {
          label: "Modalidades",
          icon: "edit_note",
        },
        options: sortedModalities?.map((modality) => ({
          value: modality?.name,
          active: false,
          label: modality?.label,
        })),
      },
      campuses: {
        config: {
          //@ts-ignore
          label: FilterConfig?.[BUSINESS_UNIT]?.campusLabel || FilterConfig?.default?.campusLabel,
          icon: "apartment",
        },
        options: sortedCampuses?.map((campus) => ({
          value: campus,
          active: false,
          label: campus,
        })),
      },
      knowledgeAreas: {
        config: {
          label: "Área de Conocimiento",
          icon: "school",
        },
        options: sortedKnowledgeAreas?.map((knowledgeArea) => ({
          value: knowledgeArea,
          active: false,
          label: knowledgeArea,
        })),
      },
    };
  }, []);

  const onFilterChange = (filters: Filter) => {
    setCurrentFilter(filters);
  };

  const filteredPrograms = filterPrograms(sortedPrograms, currentFilter);
  const router = useRouter();
  
  const modalityNames = modalities?.map(modality => modality?.name?.toLowerCase())?.filter((value, index, self) => {
    return self?.indexOf(value) === index;
  });

  const isOnlyATuRitmoModality = modalityNames?.length === 1 && modalityNames?.[0] === "a tu ritmo";
  
  const shouldRenderFilters = levelName !== "Bachillerato" && levelName !== "Preparatoria" && !isOnlyATuRitmoModality;
  /**
   * This is a flag that toggles between mosaic and list view. Since list view is yet to be implemented/polished,
   * mosaicActive is set to true. 
   */
  const mosaicActive = true;

  return (
    <section>
      <Container>
        <div className="flex flex-col space-y-6">
          {
            sectionTitle || sectionDescription
              ? <div className="flex flex-col space-y-3">
                  {
                    sectionTitle
                      ? <h1 className={cn(
                            "font-headings font-bold w-d:leading-15 w-t:leading-7.5 w-p:leading-7.5 w-t:text-6 w-p:text-6",
                            {
                              "w-d:text-13": !isOnlyATuRitmoModality,
                              "w-d:text-10": isOnlyATuRitmoModality
                            }
                          )}
                        >
                        { sectionTitle }
                        </h1>
                      : null 
                  }
                  {
                    sectionDescription
                      ? <div>
                          <RichTextRenderer content= {sectionDescription} />
                        </div>
                      : null
                  }
                </div>
              : null
          }
          {
            shouldRenderFilters
              ? <Filter
                  color={"#282828"}
                  data={filterConfig}
                  onSelectionItems={onFilterChange}
                />
              : null
          }
        </div>
        {
          filteredPrograms?.length > 0
            ? <div className="grid grid-cols-12 w-t:grid-cols-8 w-p:grid-cols-4 gap-6 mt-12">
                {
                  filteredPrograms?.map((program, i) => {      
                    const programAttributes = program?.attributes;
                    const image = programAttributes?.image;

                    return (
                      <div onClick={()=>{router.push(`${levelRoute}/${programAttributes?.slug}`)}}
                        key={`program-${i}`}
                        className={cn("flex hover:shadow-30 rounded-lg h-full border border-solid border-surface-200 overflow-hidden", {
                          "flex-col w-d:col-span-3 w-t:col-span-4 w-p:col-span-4 cursor-pointer":
                            mosaicActive,
                          "w-d:col-span-12 w-t:col-span-8 w-p:col-span-4":
                            !mosaicActive,
                        })}
                      >
                        <div>
                          {/* TODO: Handle mosaic view dimensions */}
                          <Aspect ratio="2/1">
                            <Image
                              classNames="w-full h-full"
                              classNamesImg="w-full h-full object-cover"
                              src={image?.data?.attributes?.url}
                              alt={image?.data?.attributes?.alternativeText || programAttributes?.name || ""}
                            />
                          </Aspect>
                        </div>
                        <div className="flex flex-col h-full">
                           <h3 className="font-texts font-normal text-4.5 mt-3 mx-3">
                            {programAttributes?.name}
                          </h3>
                          <div className="w-full h-full flex justify-end pb-3 pr-1 font-texts font-bold items-end">
                            <Link
                              href={`${levelRoute}/${programAttributes?.slug}`}
                              className="flex items-center justify-end font-texts font-bold"
                            >
                              <span className="mr-1 select-none">Ver más</span>
                              <span className="material-symbols-outlined icon select-none">chevron_right</span>
                            </Link>
                          </div>
                        </div>
                        {/* S */}
                      </div>
                    );
                  })
                }
              </div>
            : null
        }
      </Container>
    </section>
  );
};

const getProgramCampuses = (program: FilterProgram, modality: any ) => {

  if (!program) return [];

  const campuses: Array<string> = [];

  const programModalities = modality && modality.length > 0 ? program?.attributes?.programModalities.filter((element) => modality.includes(element?.modality?.data?.attributes?.name)) : program?.attributes?.programModalities;


  programModalities?.forEach((programModality) => {
    const curriculumByCampus = programModality?.curriculums;
    
    curriculumByCampus?.forEach((curriculumByCampus) => {
      const campusName = curriculumByCampus?.campus?.data?.attributes?.name;
      if (!campusName || campuses?.includes(campusName)) return;
      campuses?.push(campusName);
    });
  });

  return campuses;
};

const getProgramsCampuses = (programs: Array<FilterProgram> = []) => {

  if (programs?.length < 1) return [];

  const campuses: Array<string> = [];

  programs?.forEach((program) => {
    const programCampuses = getProgramCampuses(program, "");
    programCampuses?.forEach((campus) => {
      if (!campus || campuses?.includes(campus)) return;
      campuses?.push(campus);
    });
  });

  return campuses;
};

const getProgramKnowledgeAreas = (program: FilterProgram) => {

  if (!program) return [];

  const knowledgeAreas: Array<string> = [];

  const programKnowledgeAreas = program?.attributes?.knowledgeAreas?.data;

  programKnowledgeAreas?.forEach((knowledgeArea) => {
    const knowledgeAreaName = knowledgeArea?.attributes?.name;

    if (!knowledgeAreaName || knowledgeAreas?.includes(knowledgeAreaName))
      return;

    knowledgeAreas?.push(knowledgeAreaName);
  });
  return knowledgeAreas;
};

const getProgramsKnowledgeAreas = (programs: Array<FilterProgram> = []) => {

  if (programs?.length < 1) return [];

  const knowledgeAreas: Array<string> = [];

  programs?.forEach((program) => {
    const programKnowledgeAreas = getProgramKnowledgeAreas(program);

    programKnowledgeAreas?.forEach((knowledgeArea) => {
      if (!knowledgeArea || knowledgeAreas?.includes(knowledgeArea)) return;
      knowledgeAreas?.push(knowledgeArea);
    });
  });

  return knowledgeAreas;
};

const getProgramModalities = (program: FilterProgram) => {

  if (!program) return [];

  const modalities: Array<{name: string, label: string}> = [];

  const programModalities = program?.attributes?.programModalities;

  programModalities?.forEach((programModality) => {
    const programModalityName = programModality?.modality?.data?.attributes?.name;
    const programModalityLabel = programModality?.modality?.data?.attributes?.label || programModalityName;

    if (!programModalityName || modalities?.some(modality => modality?.name === programModalityName))
      return;

    modalities?.push({name: programModalityName, label: programModalityLabel});
  });

  return modalities;
};

const getProgramsModalities = (programs: Array<FilterProgram> = []) => {

  if (programs?.length < 1) return [];

  const modalities: Array<{name: string, label: string}> = [];

  programs?.forEach((program) => {
    const programModalities = getProgramModalities(program);

    programModalities?.forEach((programModality) => {
      if (!programModality?.name || modalities?.some(modality => modality.name === programModality?.name )) return;
      modalities?.push(programModality);
    });
  });

  return modalities;
};

const filterPrograms = (programs: Array<FilterProgram> = [], filter: Filter) => {

  if (programs?.length < 1) return [];
  if (!filter) return programs;

  return Object.keys(filter)?.reduce((acc, currentKey) => {
    //@ts-ignore

    if (filter?.[currentKey]?.length < 1) return acc;

    const filtradoProgramas = acc?.filter((program) => {
      switch (currentKey) {
        case "modalities": {
          const filterModalities = filter?.[currentKey];
          const programModalities = getProgramModalities(program);          
          return programModalities?.some((programModality) =>
            filterModalities?.includes(programModality?.name)
          );
        }
        case "campuses": {
          const filterCampuses = filter?.[currentKey];
          const programCampuses = getProgramCampuses(program, filter?.["modalities"]);
          return programCampuses?.some((programCampus) =>
            filterCampuses?.includes(programCampus)
          );
        }
        case "knowledgeAreas": {
          const filterKnowledgeAreas = filter?.[currentKey];
          const programKnowledgeAreas = getProgramKnowledgeAreas(program);
          return programKnowledgeAreas?.some((programKnowledgeArea) =>
            filterKnowledgeAreas?.includes(programKnowledgeArea)
          );
        }
        default: {
          return program;
        }
      }
    });
    return filtradoProgramas
  }, programs);
};

export default ProgramsFilter;