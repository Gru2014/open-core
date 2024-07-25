import React from "react";
import { ResourceTypes } from "@/types/types";

type ResourcePropsType = {
  resource: ResourceTypes;
};

const Resource = ({ resource }: ResourcePropsType) => {
  return (
    <div className="flex flex-col sm:w-96 w-full gap-4">
      <div
        style={{ backgroundImage: `url(${resource.image})` }}
        className="bg-cover h-56  rounded-3xl"
      ></div>
      <p>{resource.title}</p>
      <div>
        <div className="flex gap-2">
          {resource.link.map((link, index) => (
            <div key={index} className="flex gap-2 bg-white rounded-3xl px-1">
              {link.icon && <img src={link.icon} />}
              <p className="px-1">{link.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resource;
