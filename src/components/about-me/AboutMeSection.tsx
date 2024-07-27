import React from 'react'
import { AboutMeText } from './AboutMeText'
import { FiDownload } from 'react-icons/fi'
import { SocialNetworks } from '../ui/social-networks/SocialNetworks'

export const AboutMeSection = () => {
  return (
    <section className="fade-in  mt-20">
        <div className="flex justify-between lg:items-center flex-col gap-12 lg:gap-4 lg:flex-row">
            <div className="font-black lg:w-6/12 xl:w-7/12 text-4xl min-[480px]:text-6xl">
                  <h2 className="mb-5 leading-[2.8rem] min-[480px]:leading-[4rem]">¡Hi Welcome!

                    <span className='block'>
                      I&apos;m Iván,
                    </span>

                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 ">
                        {' '}
                        a Frontend Developer
                    </span>
                  </h2>

                <div className="flex gap-5 flex-wrap">
                  <button 
                    type="button"
                    className="btn-primary whitespace-nowrap text-xl py-3 px-6 flex gap-2 items-center"
                  >
                    Download CV
                    <FiDownload className="h-7 w-7" />
                  </button>

                  <SocialNetworks />
                </div>
            </div>

            <AboutMeText />
        </div>
    </section>
  )
}
