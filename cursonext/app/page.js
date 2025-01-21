import Link from "next/link"
import Image from "next/image"
export const metadata = {
  title: 'Tienda de Juegos de mesa',
  description: 'Eccomerce de venta de juegos de mesa',
  keywords: ['Juegos de mesa', 'Familia', 'Estrategia', 'Cartas'],
  openGraph: {
    title: 'Tienda de Juegos de mesa',
    description: 'Eccomerce de venta de juegos de mesa',
    authors: ['Lulo'],
  },
}

const links = [
  {
      label: "Inicio",
      href: "/"
  },
  {
      label: "Tienda",
      href: "/productos/todos"
  },
]

export default function Home() {
  return (
    <>
            <header className="w-full bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Link href={"/"}>
                    <Image
                        src={"/favicon.ico"}
                        alt='Logo'
                        width={200}
                        height={50}
                    />
                </Link>

                <nav className="flex justify-between gap-2">
                    {
                        links.map(link => {
                            return <Link
                                key={link.label}
                                href={link.href}
                                className={`text-base text-slate-100 p-3 `}
                            >
                                {link.label}
                            </Link>
                        })                        
                    }
                </nav>
            </div>
        </header>
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 my-4">Tienda de videojuegos</h1>
        <hr />
        <p className="text-base mt-4">Bievenidos</p>

      </main>
    </>
  )
}