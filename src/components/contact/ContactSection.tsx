

import { Lang } from '@/interfaces';
import { TitleSection } from '../ui/section/TitleSection';
import { ContactForm } from './ContactForm';
import { PrintEmail } from './PrintValue';
import { EmailInfo } from './EmailInfo';
import { contactLang } from '@/lang';

interface Props {
  lang: Lang;
}

export const ContactSection = ({lang = "us"} : Props) => {
  
  return (
    <section className="fade-in my-20 " id="contact">
        <TitleSection title={contactLang[lang]?.contactTag ?? contactLang["us"].contactTag} />
        <div className="flex flex-col-reverse gap-16  min-[992px]:flex-row justify-between">
          <EmailInfo 
            lang={lang}
          />
          <ContactForm lang={lang} />
        </div>
        <PrintEmail lang={lang} />
    </section>
  )
}

