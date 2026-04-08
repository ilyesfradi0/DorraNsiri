'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Technical and Sales Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical and Sales Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            Agro-food solutions, commercial development, and client support
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I connect technical expertise with business impact by helping agro-food companies choose, deploy, and optimize the right products and processes.
          </p>
         
        </div>

        

        
      </div>
    </section>
  );
}

