import Link from "next/link"


interface Props {
    fontSize: string
}

export const HeaderLogo = ({fontSize} : Props) => {
  return (
    <Link
        href={"/"}
    >
        <h1 className={`${fontSize} select-nonel font-black hover:scale-105 transition-transform duration-500 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600`}>
            <span className="text-gray-300">{"<"}</span>
            IvanRodriguez
            <span className="text-gray-300">{" />"}</span>
        </h1>
    </Link>
  )
}
