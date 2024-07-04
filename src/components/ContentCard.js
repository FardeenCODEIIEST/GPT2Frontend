import React from "react";

const ContentCard = (props) => {
  return (
    <>
      <div className="flex-col w-44 h-28 rounded-md overflow-hidden shadow-md p-3 bg-slate-200 cursor-pointer hover:shadow-lg hover:bg-slate-300">
        <div className="mb-1">
          <img
            height={22}
            width={22}
            src="https://img.icons8.com/?size=100&id=12244&format=png&color=000000"
            alt="idea-icon-static"
          />
        </div>
        <span className="block text-slate-600 font-semibold text-sm">
          {props.content}
        </span>
      </div>
    </>
  );
};

export default ContentCard;
