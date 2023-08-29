import React from "react";
import "./Boddy.css";
const components = {
  products: [
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAyLjZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367143-bhgxsjjhrs-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni43LzEwICAzLjlLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-cenlrrtbdu-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMzZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-bucsngjtyp-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICA1LjZLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341419-rnlrkdhuqm-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni45LzEwICAxOC41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICAyMjcuOUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA3ODQgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358718-mlrtcfhbnl-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMjIuM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
    },
    {
      title: "Boys hostel ",

      category: "Comedy",
      images:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTMyLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-uenrgwrnmf-portrait.jpg",
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

function Boddy() {
  return (
    <div>
      <div className="template">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
          alt=""
        />
      </div>
      <div style={{ marginLeft: "11%" }}>
        <h2>Recommended Movies</h2>
      </div>
      <div className="maincomponent1">
        {components.products.map((x) => {
          return (
            <div className="component1">
              <img src={x.images} alt="" />
              <h3>{x.title}</h3>
              <p>{x.category}</p>
            </div>
          );
        })}
      </div>
      <div className="template">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Boddy;
