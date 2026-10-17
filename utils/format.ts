// "Ukraine, Kyiv" -> "Kyiv, Ukraine"
export const formatLocation = (location: string): string => location.split(", ").reverse().join(", ");

// "6.8m" -> "6.8 m", "22l/100km" -> "22 l / 100km"
export const formatMeasure = (value: string): string =>
    value.replace(/^([\d.]+)/, "$1 ").replace("/", " / ");
