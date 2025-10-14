import React from "react";

const MessageSection = () => {
  return (
    <section
      className={"py-16 px-6 md:px-25 bg-gray-50"}
      aria-label="Estate statement about Mead Memorial Chapel"
    >
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            Statement from the Estate of Governor John A. Mead
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Message from Jim Douglas, Special Administrator of the Estate
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-start gap-16">
          <div className="hidden md:block md:flex-1">
            <img
              src="/home/message-md.png"
              alt="Statement from Jim Douglas, Special Administrator of the Estate of Governor John Mead"
              className="w-full h-auto rounded shadow-sm border"
            />
          </div>

          <div className="md:hidden">
            <img
              src="/home/message.png"
              alt="Statement from Jim Douglas, Special Administrator of the Estate of Governor John Mead"
              className="w-full h-auto rounded shadow-sm border"
            />
          </div>

          <div className="md:flex-1 prose max-w-none text-gray-800">
            <p>To the Editor.</p>

            <br />

            <p>
              The Estate of Governor John A. Mead respectfully responds to the
              removal of the Mead family name from the Memorial Chapel at
              Middlebury College. The decision made in the fall of 2021 was
              reached without consultation with the Mead family and has caused
              considerable disappointment and concern.
            </p>

            <br />

            <p>
              Governor Mead devoted himself to public service and to Middlebury
              College. His contributions include strong advocacy for women’s
              suffrage in Vermont and the financial support used to construct
              the chapel that bears his name. The Estate has filed a formal
              complaint in Superior Court seeking fairness and due process in
              the treatment of the Governor’s legacy.
            </p>

            <br />

            <p>
              Jim Douglas, as Special Administrator of the Estate, is committed
              to resolving this matter equitably and will continue to provide
              information to the College’s Trustees and the public as
              appropriate.
            </p>

            <p className="mt-4 font-medium">
              Jim Douglas
              <br />
              Special Administrator, Estate of Governor John A. Mead
            </p>

            <div className="mt-6">
              <a
                href="/lawsuit"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                View related legal proceedings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MessageSection;