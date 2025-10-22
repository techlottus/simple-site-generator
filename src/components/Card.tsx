'use client'
import React from 'react'
import Aspect from '@design-system/components/Aspect/Aspect'
import Image from '@design-system/components/Image/Image'
import cn from 'classnames'


export type CardType = {
  name: string
  desktop_image: {
    data: {
      attributes: {
        url: string;
      }
    }
  }
  start_datetime: string
  start_time:string
  end_datetime: string
  end_time: string
  register_start_datetime: string
  start_register_time:string
  register_end_datetime: string
  end_register_time: string
  status: string
  slug: string
  is_private: boolean
  category?: {
    data: {
      attributes: {
        name: string
      }
    }
  }
  categoryName: string;
  modality: string;
  campus?: {
    data: {
      attributes: {
        name: string
        phone: string
        address: string
      }
    }
  }
  campusData?: {
        name: string
        phone: string
        address: string
    }
  campusName?: string;
  video: {
    youtube_id: string
  }
} 


/**
 * Card component that displays event information.
 *
 * @param {CardType} props - The properties for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 *
 * @remarks
 * This component displays event details such as name, category, status, date, and time.
 * It also handles different statuses (draft, active, finished) and displays appropriate labels.
 * If the event is private, it shows a tag indicating exclusivity for students.
 * If a video recording is available, it shows an indicator for that as well.
 *
 * @example
 * ```tsx
 * <Card attributes={eventAttributes} />
 * ```
 */
export const Card = (props: CardType) => {

  const cardData = props;
  // TODO -> Verificar los status y sus condiciones  
  const labelStatus: { draft: string, active: string, finished: string } = {
    draft: 'Próximamente',
    active: 'Registro abierto',
    finished: 'Finalizado',
  }
  const convert = (horaString:string) =>{
    const [hora, minuto] = horaString.split(":").map(Number); 
    const fecha = new Date();
    fecha.setHours(hora, minuto, 0, 0);   
    return fecha.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", hour12: false });
  }

  const dateCard = ` ${new Date(cardData?.start_datetime).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}  · ${convert(cardData?.start_time)} - ${convert(cardData?.end_time)}`;

  return (
    <a tabIndex={-1}  href={`/eventos/${cardData?.slug}`} className="flex flex-col bg-transparent rounded-lg shadow-md w-full h-full group desktop:cursor-pointer desktop:transition-transform desktop:transform desktop:hover:scale-105">
      <div className='rounded-t-lg h-fit w-full bg-surface-200'>
        <Aspect ratio='2/1'>
          {cardData?.is_private && <div id="tag-private" className={cn("absolute top-2 right-2 bg-surface-900 text-surface-0 font-texts text-sm font-normal px-2 py-1 rounded z-10")}>
            Exclusivo estudiantes
          </div>}
          <Image classNames={cn("absolute top-0 left-0 w-full h-full rounded-t-lg overflow-hidden")} src={cardData?.desktop_image?.data?.attributes?.url} alt="" />
          {cardData?.status && <div id="tag-status" className={cn("absolute bottom-0 right-0 bg-surface-900/70 text-surface-0 font-texts text-sm font-normal px-2 py-1 rounded-tl z-10")}>
            {labelStatus[cardData?.status as keyof typeof labelStatus]}
          </div>}
        </Aspect>
      </div>
      <div className="p-4 flex flex-col gap-2 h-full justify-between flex-grow">
        <div className='flex flex-col gap-2'>
          {cardData?.categoryName &&
            <div id='tag-category' className='bg-surface-900 text-surface-0 font-texts text-sm font-normal px-3 py-1.5 rounded-3xl w-fit'>
              {cardData?.categoryName}
            </div>
          }
          <h3 className="font-headings text-base font-semibold text-surface-900">{cardData?.name}</h3>
          {cardData?.video?.youtube_id && <div className='flex items-center'><span className='font-icons-solid fill-error-500 text-error-500'>fiber_manual_record</span> <span className='font-texts font-bold text-sm text-error-500'>Grabación disponible</span></div>}
          <div className='flex items-center space-x-1'>
            <span className='material-symbols-outlined !text-sm font-normal'>schedule</span>
            <span className=" ml-2 font-texts font-normal text-surface-950 text-sm">{dateCard}</span>
          </div>
        </div>
        <div className='flex space-x-1 justify-end text-info-500 font-texts font-bold text-base '>
          <span className='group-hover:underline'>Ver detalles</span><span className='material-symbols-outlined !text-base'>chevron_right</span>
        </div>
      </div>
    </a>
  )
}
