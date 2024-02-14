import React from "react";

interface ITimeLineBoxProps {
  date: string;
  image: string;
  regdate: string;
  mainText: string;
  paragrah: string;
}

export default function TimeLineBox({
  date,
  image,
  mainText,
  regdate,
  paragrah,
}: ITimeLineBoxProps) {
  const paragraphElements = paragrah.split("\n").map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
  return (
    <div className="mt-4 w-full flex flex-col justify-between h-full pt-24 p-2 ml-2 border-yellow-500 border-l-4 rounded-full gap-0">
      <h2 className="font-semibold text-lg">{date}</h2>
      <div className="w-48 flex flex-col gap-0">
        <div
          className={`w-48 h-32 inline-block bg-slate-500 object-cover bg-cover ${image}`}
        />
        <div className="w-full mt-2">
          <h2>{mainText}</h2>
          <p className="text-slate-500 text-sm">({regdate})</p>
          <div className="inline-block mt-2 border-l-2 pl-4 border-gray-500">
            <p className="break-words">{paragraphElements}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
