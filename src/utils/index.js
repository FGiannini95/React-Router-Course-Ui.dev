export function slugify(name) {
  //"Why React Hook" =>> "Why-React-Hook"
  return name.toLowerCase().split(" ").join("-");
}
