import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

import Card from "../Components/Card";
import GreenButton from "../Components/GreenButton";
import {
  CheckCircle2,
  LucideShieldCheck,
  Heart,
  SmileIcon,
  ShieldCheck,
  Smile,
} from "lucide-react";
import MiniCard from "../Components/MiniCard";
import SideCard from "../Components/SideCard";

const HomePage = () => {
  const {
    bannerData,
    academicCardData,
    homeVideoData,
    mission_visionData,
    reasonsData,
    childActivityData,
  } = useLoaderData();

  const homevid = homeVideoData?.[0];
  return (
    <div className="flex h-full w-full flex-col gap-y-10 lg:gap-y-20">
      {/* Banner */}
      <div
        className="flex w-full bg-cover bg-no-repeat text-bone md:justify-center lg:min-h-100"
        style={{
          backgroundImage:
            "linear-gradient( rgba(59,59,59,.75)), url('/assets/kinder.jpg')",
        }}
      >
        {bannerData.map((banner) => (
          <div className="flex flex-col gap-y-5 p-5 md:w-150 lg:w-250 lg:gap-y-10 lg:p-10">
            <span className="w-fit">
              <h2
                className={`${banner.admission_status === "Open" ? "bg-swamp-green " : "bg-reject"} rounded-full px-4 py-2 font-[PoppinsBold] text-sm inset-shadow-med lg:text-base`}
              >
                Admission Now {banner.admission_status}
              </h2>
            </span>
            <h1 className="font-[PoppinsBold] text-xl lg:text-4xl">
              {banner.banner_title}
            </h1>
            <h3 className="text-xs lg:text-lg">{banner.banner_quote}</h3>
            <span className="flex items-center justify-between text-xs lg:text-lg">
              <h3>School Year {banner.school_year}</h3>
              {banner.admission_status === "Open" && (
                <Link to="enrollment">
                  <GreenButton Label={"Enroll Now"} />
                </Link>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* cards */}
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-full flex-col lg:gap-5">
          <div className="flex w-full justify-center">
            <h2 className="px-5 font-[PoppinsBold] text-swamp-green lg:text-2xl">
              Academic Programs
            </h2>
          </div>

          <div className="no-scrollbar flex snap-x snap-mandatory justify-center-safe gap-5 overflow-x-auto px-5 py-5">
            {academicCardData.map((card) => (
              <Card key={card.id} card={card} Cimg={card.imageurl} />
            ))}
          </div>
        </div>
      </div>

      {/* mission vision */}
      <div className="flex flex-col bg-swamp-green md:w-full md:items-center lg:flex-row lg:justify-center lg:gap-x-20 lg:px-5 lg:py-5">
        {mission_visionData.map((missvis) => {
          return (
            // mission
            <>
              <div className="flex flex-col gap-y-2 p-5 px-5 md:w-150 lg:min-h-75 lg:gap-5 lg:px-0">
                <h3 className="text-base text-bone lg:text-xl">
                  {missvis.type}
                </h3>
                <h1 className="font-[PoppinsBold] text-lg text-egg lg:text-3xl">
                  {missvis.title}
                </h1>
                <span className="text-justify text-xs text-bone/80 lg:text-lg">
                  {missvis.description}
                </span>
              </div>
            </>
          );
        })}
      </div>

      {/* Video + why parents choose us */}
      <div className="flex flex-col gap-y-5 py-5 md:items-center lg:flex-row lg:items-stretch lg:justify-center lg:gap-x-20">
        <div className="flex flex-col gap-y-3 px-5 md:w-150 lg:px-0">
          {/* title */}
          <span className="flex flex-col">
            <h1 className="font-[PoppinsBold] text-lg text-egg-dark lg:text-2xl">
              Grace Christian Academy
            </h1>
            <h3 className="text-xs text-ashlight lg:text-base">
              Short video story from campus
            </h3>
          </span>
          {/* video */}
          <video
            className="h-50 w-fit rounded-2xl bg-egg-dark inset-shadow-med md:h-75 lg:h-80"
            controls
          >
            <source src={homevid.videourl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col gap-y-5 px-5 md:w-150 md:flex-row md:gap-x-5 md:gap-y-0 lg:gap-x-5 lg:px-0">
          {/* why parents choose us */}
          <div className="flex h-auto flex-col gap-y-5 rounded-2xl bg-bone p-5 inset-shadow-med">
            <h1 className="font-[PoppinsBold] text-sm text-swamp-green lg:text-lg">
              WHY PARENTS CHOOSE US
            </h1>
            <div className="no-scrollbar flex flex-col gap-y-4 overflow-y-auto text-xs lg:h-75 lg:text-base">
              {reasonsData.map((reasons) => {
                return (
                  <span className="flex items-center gap-x-3">
                    <span>
                      <CheckCircle2 />
                    </span>
                    {reasons.reasons}
                  </span>
                );
              })}
            </div>
          </div>
          {/* side cards */}
          <div className="flex w-full gap-x-5 md:w-40 md:flex-col md:gap-y-5">
            <SideCard
              Icon={
                <ShieldCheck className="scale-150 fill-swamp-green stroke-bone stroke-1" />
              }
              Title={"Safety"}
            />
            <SideCard
              Icon={
                <Heart className="scale-150 fill-swamp-green stroke-bone stroke-1" />
              }
              Title={"Relationships"}
            />
          </div>
        </div>
      </div>
      {/* children activities */}
      <div className="bg-swamp-lite flex flex-col py-5 md:items-center">
        <div className="flex flex-col md:w-150 lg:w-full lg:items-center">
          <span className="px-5 font-[PoppinsBold] text-swamp-green lg:text-2xl">
            Children Activities
          </span>
          <MiniCard childActData={childActivityData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
