import removeExtension from "./removeExtension";

export default function importAll(r) {
  return r.keys().map((item, index) => {
    return {
      src: r(item),
      chosen: false,
      name: removeExtension(item.replace("./", "")),
    };
  });
}
