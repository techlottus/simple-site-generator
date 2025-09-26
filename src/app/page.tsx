import Button from '@design-system/components/Button/Button';
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-16 gap-16 sm:p-16">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start">
        <Image
          src="https://static.wikia.nocookie.net/dragonball/images/c/c0/Son_Goku_en_Super_Hero.png/revision/latest?cb=20220302091733&path-prefix=es"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className='font-headings'>Hola soy tu amigo Goku!</h1>
        <div>
          <p>Este es un boton consumido del DS ⬇️</p>
          <Button size="sm" intent="primary">
              Test
          </Button>
        </div>
        <p>Esto es una paleta generada con multitenant ⬇️</p>
        <div className='grid grid-cols-6 gap-4'>
        <div className="w-[40px] h-[40px] bg-primary-50 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-100 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-200 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-300 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-400 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-500 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-600 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-700 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-800 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-900 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-primary-950 rounded-[10px]"></div>
        <div className="w-[40px] h-[40px] bg-error-500 rounded-[10px]">e</div>
        <div className="w-[40px] h-[40px] bg-success-500 rounded-[10px]">s</div>
        <div className="w-[40px] h-[40px] bg-warning-500 rounded-[10px]">w</div>
        <div className="w-[40px] h-[40px] bg-info-500 rounded-[10px]">i</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
