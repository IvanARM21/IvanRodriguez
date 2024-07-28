import { UsignVar } from './UsingVar';
import { TestButton } from './TestButton';
import { ChangeTypeButton } from './ChangeTypeButton';
import { SocialNetworks } from '../ui/social-networks/SocialNetworks';

export const EmailInfo = () => {
  return (
    <div className="flex flex-col justify-between gap-8 w-full min-[992px]:w-6/12">
      <div className="bg-slate-900 rounded-lg px-4 py-4 sm:py-6 overflow-auto scrollbar">
        <ChangeTypeButton />
        <p className="text-slate-400 text-nowrap text-xl">{"// First we declare the variable"}</p>
        <p className="text-indigo-500 font-bold text-xl text-nowrap">
          <span>const</span> {" "}
          <span className="text-gray-300">myEmail</span>
          <span>{" "} = {" "}</span>
          <span className="text-emerald-500">&quot;ivanrms371@gmail.com&quot;</span>
          <span className="text-gray-300">;</span>
        </p>
        <UsignVar />
      </div>

      <div className="flex justify-between items-center">
        <SocialNetworks />
        <TestButton />
      </div>
    </div>
  );
}
