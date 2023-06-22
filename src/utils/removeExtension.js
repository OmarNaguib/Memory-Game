export default function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf(".")) || filename;
}
