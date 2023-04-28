import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/netflix.png";
import project2 from "../../public/images/projects/weather-app.png";
import project3 from "../../public/images/projects/gym-app.png";
import airbnb from "../../public/images/projects/airbnb-clone.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark 
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]  bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Matt Rangel | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Curiosity Fuels Joy"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-5xl"
          />
          <AnimatedText
            text="'I guess you could call it a 'failure', but I prefer the term 'learning experience'.'"
            className={`mb-2 lg:!text-3.5xl sm:!text-2xl xl:!text-2xl sm:mb-4 text-dark/75 dark:text-light/75
            font-specialE`}
          />
          <AnimatedText
            text="Andy Weir, The Martian"
            className={`mb-2 lg:!text-2.5xl sm:!text-2xl xl:!text-xl sm:mb-8 text-dark/75 dark:text-light/75
            font-specialE`}
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Netflix Clone App"
                img={project1}
                summary="A Netflix Clone App that allows users to register, login, preview movies, and save to favorites.
Built with React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth & Vercel.
"
                link="https://webmovie-pivcxxbqd-rangelmatt.vercel.app/auth"
                github="https://github.com/rangelMatt/web-movie"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Weather App"
                img={project2}
                summary="A Weather App that allows users to enter the name of a city and retrieves real-time weather data using an API openweathermap.org
Built and designed with Next.JS, Tailwind, OpenWeatherMap API, and deployed with Vercel."
                link="https://weather-nextjs-sand.vercel.app/"
                github="https://github.com/rangelMatt/weather-nextjs"
                type="Web Application"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Local Gym Website"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://centralcoastbarbell.com/"
                github="https://github.com/rangelMatt/ccb-app"
                type="Website"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Airbnb Clone App"
                img={airbnb}
                summary="Airbnb Clone App that allows to browse and search for different Airbnb listings, create a user account, create Airbnb listings, and book available listings.
Built with React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth & Vercel.
"
                link="https://rent-stay-i4canr4wn-rangelmatt.vercel.app/"
                github="https://github.com/rangelMatt/airstay"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default projects;
