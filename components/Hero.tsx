'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-5xl w-full mx-auto text-center">
        
        {/* Profile Image */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
            <Image
              src="/profile.jpeg"
              alt="Technical and Sales Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Technical and Sales Engineer
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Agro-food solutions, commercial development, and client support
        </p>

        {/* Contact Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
            Contact Information
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Email */}
            <a
              href="mailto:food.ingredients@speedtunisia.com"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-200 group"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-white mt-1" />
              <div className="text-left">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-white font-medium break-all">
                  food.ingredients@speedtunisia.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+21629465465"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-200 group"
            >
              <Phone className="w-5 h-5 text-gray-400 group-hover:text-white mt-1" />
              <div className="text-left">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-white font-medium">
                  +216 29 465 465
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-200">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div className="text-left">
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-white font-medium leading-relaxed">
                  163, Av H.Bourguiba <br />
                  4021 Kalaa Esseghira <br />
                  Sousse, Tunisie
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-5 border border-purple-500/30">
          <p className="text-gray-300 text-sm sm:text-base">
            Let&apos;s discuss how to improve product performance, client
            satisfaction, and commercial growth.
          </p>
        </div>
      </div>
    </section>
  );
}