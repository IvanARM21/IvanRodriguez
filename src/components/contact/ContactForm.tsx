"use client";
import { Alert } from '@/components';
import { isValidEmail } from "@/utils";
import { useContactStore } from "@/store/contact-store";
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';

export const ContactForm = () => {

  const { formData, isHovered, onChange, onBlur, onSubmit, isSubmit, isLoading } = useContactStore();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsVisible(isSubmit);
    }, 300);

    return () => clearTimeout(timer);
  }, [isSubmit]);

  return (
    <form onSubmit={onSubmit} className="bg-slate-900 px-6 py-8 rounded-lg w-full min-[992px]:w-6/12">
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
                    className="text-lg sm:text-xl"
                >Name</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Your Name"
                    className="bg-slate-800 p-3 rounded-md"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={formData.name}
                />
                { isHovered.name && formData.name === "" && <Alert 
                        isError={true}
                        message="The name cannot be empty"
                /> }
            </div>
            <div className="flex flex-col gap-2 ">
                <label 
                    htmlFor="email" 
                    className="text-lg sm:text-xl"
                >Email</label>
                <input 
                    type="text" 
                    id="email"
                    placeholder="Your Email"
                    className="bg-slate-800 p-3 rounded-md"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={formData.email}
                />
                { isHovered.email && formData.email === "" && <Alert 
                        isError={true}
                        message="The email cannot be empty"
                /> }
                { !isValidEmail(formData.email) && formData.email.length > 0 && <Alert 
                        isError={true}
                        message="The email is invalid"
                /> }
            </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="subject" 
                className="text-lg sm:text-xl"
            >Subject</label>
            <input 
                type="text" 
                id="subject"
                placeholder="The Subject"
                className="bg-slate-800 p-3 rounded-md"
                onChange={onChange}
                onBlur={onBlur}
                value={formData.subject}
            />
            {
                isHovered.subject && formData.subject === "" && <Alert 
                    isError={true}
                    message="The subject cannot be empty"
                />
            }
        </div>

        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="message" 
                className="text-lg sm:text-xl"
            >
                Message
            </label>
            <textarea 
                name="message" 
                id="message"
                placeholder="Your Message"
                rows={3}
                className="bg-slate-800 p-3 rounded-md resize-none"
                onChange={onChange}
                onBlur={onBlur}
                value={formData.message}
            ></textarea>
            { isHovered.message && formData.message === "" && <Alert 
                    isError={true}
                    message="The message cannot be empty"
             /> }
             {formData.message.length > 0 && formData.message.length < 25 && <Alert 
                    isError={true}
                    message="The length of message must be longer than twenty-five"
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
                value={!isLoading ? "Send" : ""}
            />
        </div>
    </form>
  )
}