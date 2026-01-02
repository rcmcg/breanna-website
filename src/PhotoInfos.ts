import type {IPhotoInfo} from "./IPhotoInfo.ts";

const preview_root = "/personal/preview/"
const small_root = "/personal/320w/"
const quarter_root = "/personal/half/"
export const photos: IPhotoInfo[] = [
  getIPhotoInfo(
    "angel.png",
    "TODO",
    431
  ),
  getIPhotoInfo(
    "angel-waste.png",
    "Dead woman with a bullet wound in the head, angel tattoo above her right eye",
    872
  ),
  getIPhotoInfo(
    "axe-card.png",
    "TODO",
    600,
  ),
  getIPhotoInfo(
    "cigs.png",
    "TODO",
    512,
  ),
  getIPhotoInfo(
    "darkest.png",
    "TODO",
    637,
  ),
  getIPhotoInfo(
    "dogs.png",
    "TODO",
    900,
  ),
  getIPhotoInfo(
    "dragon-painting.png",
    "TODO",
    796,
  ),
  getIPhotoInfo(
    "fish.png",
    "TODO",
    637,
  ),
  getIPhotoInfo(
    "Floating_Head.png",
    "TODO",
    512,
  ),
  getIPhotoInfo(
    "headshot-1.png",
    "TODO",
    512,
  ),
  getIPhotoInfo(
    "headshot-2.png",
    "TODO",
    512,
  ),
  getIPhotoInfo(
    "hooded-gewby.png",
    "TODO",
    637,
  ),
  getIPhotoInfo(
    "kawaii-thing.png",
    "TODO",
    517,
  ),
  getIPhotoInfo(
    "knight.png",
    "TODO",
    637,
  ),
  getIPhotoInfo(
    "knight-2.png",
    "TODO",
    637,
  ),
  getIPhotoInfo(
    "pickled-rabbit.png",
    "TODO",
    1600,
  ),
  getIPhotoInfo(
    "scythe.png",
    "TODO",
    512,
  ),
  getIPhotoInfo(
    "smoke.png",
    "TODO",
    638,
  ),
  getIPhotoInfo(
    "spear-card.png",
    "TODO",
    1200,
  ),
]

function getIPhotoInfo(file_name: string, alt_text: string, full_width: number): IPhotoInfo {
  return {
    preview_path: preview_root + file_name,
    small_path: small_root + file_name,
    full_path: quarter_root + file_name,
    full_width: full_width,
    alt_text: alt_text,
  }
}