"use client";
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Lang } from '@/interfaces';
import { Alert } from '@/components';
import { isValidEmail } from "@/utils";
import { contactLang } from '@/lang';
import { useContactStore } from "@/store";

interface Props {
    lang: Lang
}

export const ContactForm = ({lang} : Props) => {

  const [isVisible, setIsVisible] = useState(false);
  const { formData, isHovered, onChange, onBlur, onSubmit, isSubmit, isLoading } = useContactStore();

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsVisible(isSubmit);
    }, 300);

    return () => clearTimeout(timer);
  }, [isSubmit]);

  return (
    <form onSubmit={onSubmit} className="bg-slate-900 px-6 py-8 rounded-2xl w-full min-[992px]:w-6/12">
        {isVisible && (
            <Alert 
                isError={false}
                message="The message has been sent correctly"
                className={clsx(
                    "justify-center mb-2 text-lg", {
                        "show-message-sent": isSubmit,
                        "hidden-message-sent": !isSubmit,
                    }
                )}
            />
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2 ">
                <label 
                    htmlFor="name" 
                    className="text-xl"
                >{contactLang[lang].nameLabel}</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder={contactLang[lang].namePlaceholder}
                    className="bg-slate-800 p-3 rounded-xl"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={formData.name}
                />
                { isHovered.name && formData.name === "" && <Alert 
                        isError={true}
                        message={contactLang[lang].nameAlert}
                /> }
            </div>
            <div className="flex flex-col gap-2 ">
                <label 
                    htmlFor="email" 
                    className="text-xl"
                >{contactLang[lang].emailLabel}</label>
                <input 
                    type="text" 
                    id="email"
                    placeholder={contactLang[lang].emailPlaceholder}
                    className="bg-slate-800 p-3 rounded-xl"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={formData.email}
                />
                { isHovered.email && formData.email === "" && <Alert 
                        isError={true}
                        message={contactLang[lang].emailAlert}
                /> }
                { !isValidEmail(formData.email) && formData.email.length > 0 && <Alert 
                        isError={true}
                        message={contactLang[lang].noValidEmail}
                /> }
            </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="subject" 
                className="text-xl"
            >{contactLang[lang].subjectLabel}</label>
            <input 
                type="text" 
                id="subject"
                placeholder={contactLang[lang].subjectPlaceholder}
                className="bg-slate-800 p-3 rounded-xl"
                onChange={onChange}
                onBlur={onBlur}
                value={formData.subject}
            />
            {
                isHovered.subject && formData.subject === "" && <Alert 
                    isError={true}
                    message={contactLang[lang].subjectAlert}
                />
            }
        </div>

        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="message" 
                className="text-xl"
            >
                {contactLang[lang].messageLabel}
            </label>
            <textarea 
                name="message" 
                id="message"
                placeholder={contactLang[lang].messagePlaceholder}
                rows={3}
                className="bg-slate-800 p-3 rounded-xl resize-none"
                onChange={onChange}
                onBlur={onBlur}
                value={formData.message}
            ></textarea>
            { isHovered.message && formData.message === "" && <Alert 
                    isError={true}
                    message={contactLang[lang].messageAlert}
             /> }
        </div>

        <div className="relative mt-5">
            {isLoading && (
                <div className="spinner absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            )}
 
            <input 
                type="submit"
                className="btn-primary px-4 py-3 cursor-pointer w-full"
                disabled={isLoading}
                value={!isLoading ? `${contactLang[lang].sendButton}` : ""}
            />
        </div>
    </form>
  )
}