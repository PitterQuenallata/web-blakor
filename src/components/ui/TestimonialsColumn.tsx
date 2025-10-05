"use client";
import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  image: string;
  author: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          translateY: "-50%",
          opacity: 1,
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          opacity: { duration: 0.8, ease: "easeOut" },
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, image, author, role }, i) => (
                <div className="card p-6 max-w-xs w-full" key={i}>
                  <div className="text-sm leading-relaxed mb-4">{quote}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={author}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium text-sm">{author}</div>
                      <div className="text-xs opacity-60">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
