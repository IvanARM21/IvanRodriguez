import { Lang } from "@/interfaces"
import { aboutMeLang } from "@/lang"

interface Props {
  lang: Lang
}

export const AboutMeText = ({lang} : Props) => {
  return (
    <div className="fade-in w-full md:w-3/4 lg:w-6/12 xl:w-5/12">
        <p className="text-xl leading-8 font-semibold">
            <span 
              className="text-2xl text-center sm:text-left font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mr-2"
            >
              <span className="text-gray-300">{'<'}</span>
                {aboutMeLang[lang]?.AboutMeTag ?? aboutMeLang["us"]?.AboutMeTag}
              <span className="text-gray-300">{'>'}</span>
            </span>
            <span className="font-medium">
              {aboutMeLang[lang]?.AboutMeTextOne ?? aboutMeLang["us"]?.AboutMeTextOne}
              <span className=" italic text-indigo-600">
                {aboutMeLang[lang]?.HighlightedText ?? aboutMeLang["us"]?.HighlightedText}
              </span>
              {aboutMeLang[lang]?.AboutMeTextTwo ?? aboutMeLang["us"]?.AboutMeTextTwo}
            </span>
            <span 
              className="ml-2 text-2xl text-center sm:text-left font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600"
            >
              <span className="text-gray-300">{'</'}</span>
                {aboutMeLang[lang]?.AboutMeTag ?? aboutMeLang["us"]?.AboutMeTag}
              <span className="text-gray-300">{'>'}</span>
            </span>
        </p>
    </div>
  )
}
