

import { TitleSection } from '../ui/section/TitleSection';
import { ContactForm } from './ContactForm';
import { PrintEmail } from './PrintValue';
import { EmailInfo } from './EmailInfo';

export const ContactSection = () => {
  
  return (
    <section className="fade-in my-20 " id="contact">
        <TitleSection title="Contact"  />
        <div className="flex flex-col-reverse gap-10 min-[992px]:gap-3 min-[992px]:flex-row justify-between">
          <EmailInfo />
          <ContactForm />
        </div>
        <PrintEmail />
    </section>
  )
}

