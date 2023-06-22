import removeExtension from "./removeExtension";
// get all image sources from the asset folder, calculate their name, add a chosen attribute
export default function importAll(r) {
  return r.keys().map((item, index) => {
    return {
      src: r(item),
      chosen: false,
      name: removeExtension(item.replace("./", "")),
    };
  });
}
