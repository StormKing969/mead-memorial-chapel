import React from "react";
import MiniTimelineVertical from "~/components/MiniTimelineVertical";
import { AboutTimelineEvent } from "../../../constants/about";
import LocationMap from "~/components/LocationMap";

const AboutContent = () => {
  return (
    <section
      className={"max-w-[900px] mx-auto px-6 py-12 space-y-10 flex flex-col"}
    >
      <div>
        <h2 className={"text-2xl font-semibold mb-3"}>Our History</h2>
        <p className={"text-gray-700 leading-relaxed"}>
          Built in 1916 through the generosity of Governor John Abner Mead, Mead
          Memorial Chapel has stood for more than a century as a landmark of
          Middlebury College and the wider Vermont community. Designed in the
          Collegiate Gothic style, the chapel has hosted countless ceremonies,
          concerts, and gatherings.
        </p>
      </div>

      <div className={"flex flex-row justify-between gap-8"}>
        <div className={"flex flex-col items-center gap-8 md:max-w-[400px]"}>
          <div>
            <h2 className={"text-2xl font-semibold mb-3"}>
              A Legacy of Service
            </h2>
            <p className={"text-gray-700 leading-relaxed"}>
              Governor Mead’s gift was more than a building — it was a tribute
              to his family and a commitment to the values of education,
              community, and faith. For decades, the chapel has been a
              centerpiece of campus life, symbolizing both tradition and
              continuity.
            </p>
          </div>

          <div>
            <h2 className={"text-2xl font-semibold mb-3"}>
              Preserving the Future
            </h2>
            <p className={"text-gray-700 leading-relaxed"}>
              Today, Mead Memorial Chapel continues to inspire students, alumni,
              and visitors alike. Its stained glass windows, soaring arches, and
              timeless architecture remind us of the importance of heritage
              while inviting new generations to create their own memories within
              its walls.
            </p>
          </div>

          <div className={"max-w-4xl mx-auto px-6"}>
            <h2 className={"text-3xl font-bold mb-8 text-center"}>Timeline</h2>
            <ul className={"border-l-2 border-gray-300 space-y-8 relative"}>
              {AboutTimelineEvent.map((ele, index) => (
                <li className="ml-6" key={index}>
                  <MiniTimelineVertical
                    year={ele.year}
                    description={ele.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={"flex-col items-center gap-8 max-w-[400px] md:flex hidden"}
        >
          <img
            src={"/about/chapel-side.png"}
            alt={"Chapel interior side"}
            className={"rounded shadow object-cover h-full max-h-[500px]"}
          />

          <img
            src={"/about/chapel-interior.jpg"}
            alt={"Chapel interior"}
            className={"rounded shadow object-cover h-full max-h-[500px]"}
          />
        </div>
      </div>

      <div>
        <h2 className={"text-3xl font-bold mb-8 text-center"}>Image Gallery</h2>
        <div
          className={
            "flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-evenly gap-5"
          }
        >
          <img
            src={"/about/chapel-side.png"}
            alt={"Chapel interior side"}
            className={"rounded shadow object-cover h-full w-full max-w-[250px] max-h-[250px]"}
          />
          <img
            src={"/about/chapel-interior.jpg"}
            alt={"Chapel interior"}
            className={"rounded shadow object-cover h-full w-full max-w-[250px] max-h-[250px]"}
          />
          <img
            src={"/home/chapel-aboutPreview.jpg"}
            alt={"Chapel exterior side"}
            className={"rounded shadow object-cover h-full w-full max-w-[250px] max-h-[250px]"}
          />
          <img
            src={"/home/chapel-hero.jpg"}
            alt={"Chapel exterior side - night"}
            className={"rounded shadow object-cover h-full w-full max-w-[250px] max-h-[250px]"}
          />
        </div>
        <p className={"flex items-center justify-center mt-5"}>
          <a
            href={"https://meadmemorialchapel.com/MeadChapelPhotos"}
            className={"underline text-blue-600"}
          >
            More Mead Chapel Photos
          </a>
        </p>
      </div>

      <div>
        <h2 className={"text-3xl font-bold mb-8 text-center"}>
          Chapel's Location
        </h2>
        <LocationMap />
      </div>
    </section>
  );
};

export default AboutContent;