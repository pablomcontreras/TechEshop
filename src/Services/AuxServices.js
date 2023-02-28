export function trimTitle(string) {
  if (string.length > 28) {
    let tituloCorto = string.slice(0, 24) + "...";
    return tituloCorto;
  } else {
    return string;
  }
}

export function trimDesc(string) {
  let descripcionCorta = string.slice(0, 375) + "...";
  return descripcionCorta;
}
