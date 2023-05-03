import placeHolder from '../assets/no-image-placeholder.webp';
export function getCropImageUrl(url: string) {
  if (!url) {
    return placeHolder
  }
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
}
