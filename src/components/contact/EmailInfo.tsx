import { Lang } from '@/interfaces';
import { UsignVar } from './UsingVar';
import { TestButton } from './TestButton';
import { ChangeTypeButton } from './ChangeTypeButton';
import { SocialNetworks } from '../ui/social-networks/SocialNetworks';
import { contactLang } from '@/lang';

interface Props {
  lang: Lang;
}

export const EmailInfo = ({lang} : Props) => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full min-[992px]:w-6/12">
      <div className="bg-slate-900 rounded-2xl px-4 py-4 sm:py-6 overflow-auto scrollbar">
        <ChangeTypeButton lang={lang}/>
        <p className="text-slate-400 text-nowrap text-xl">{`// ${contactLang[lang].firstComment}`}</p>
        <p className="text-indigo-500 font-bold text-xl text-nowrap">
          <span>const</span> {" "}
          <span className="text-gray-300">{contactLang[lang].varMyEmail}</span>
          <span>{" "} = {" "}</span>
          <span className="text-emerald-500">&quot;ivanrms371@gmail.com&quot;</span>
          <span className="text-gray-300">;</span>
        </p>
        <UsignVar lang={lang} />
      </div>

      <div className="flex justify-between items-center">
        <SocialNetworks />
        <TestButton lang={lang} />
      </div>
    </div>
  );
}
