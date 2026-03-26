import React from 'react';
import Profile from '../Components/profile';

export default function About() {
  return (
    <div className=" pt-24">
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-7xl">
            
            <h1 className="text-5xl text-white md:text-7xl  tracking-tight mb-6 font-belleza">
              We transform real moments into timeless <br /> 
               cinematic experiences! 
            </h1>

            <p className="text-sm text-white text-justify leading-relaxed font-roboto">
              At Studio VisualFX, we believe every moment has a story worth telling. Through 
              cinematic storytelling, we capture genuine emotions and transform them into 
              visually compelling narratives that last a lifetime. By blending creativity 
              with modern filmmaking techniques, we go beyond traditional visuals to craft
               each frame with precision and purpose. Our team focuses on light, motion, and
                emotion to create meaningful visual experiences that allow you to relive your
                 most valuable moments just as they were meant to be remembered.
            </p>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 ">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              { label: 'Years of Experience', value: '5+' },
              { label: 'Frames Crafted', value: '100+' },
              { label: 'Cinematic Hours', value: '250+' },
              { label: 'Creative Team', value: '3+' },
            ].map((stat, i) => (
              
              <div key={i} className="border-l-4 border-white pl-4">
                <div className="text-3xl  font-belleza text-white">{stat.value}</div>
                <div className="text-[10px] tracking-widest text-white uppercase  font-roboto">
                  {stat.label}
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

            <Profile/>

    </div>
  );
}