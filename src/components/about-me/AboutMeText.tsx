
export const AboutMeText = () => {
  return (
    <div className="fade-in w-full md:w-3/4 lg:w-6/12 xl:w-5/12">
        <p className="text-lg leading-8">
            <span 
              className="text-3xl text-center sm:text-left font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mr-2"
            >
              <span className="text-gray-300">{'<'}</span>
                {'AboutMe'}
              <span className="text-gray-300">{'>'}</span>
            </span>
            I&apos;m Ivan Web Developer with FullStack but I specialize in Frontend, I like to create websites with modern, efficient and accessible designs for users. 
            <span 
            className="ml-2 text-3xl text-center sm:text-left font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600"
            >
              <span className="text-gray-300">{'</'}</span>
              {'AboutMe'}
              <span className="text-gray-300">{'>'}</span>
            </span>
        </p>
    </div>
  )
}
