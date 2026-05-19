/** Slovak typography: space before € (e.g. 4 €, 2,50 €). */
export function formatEuro(text: string): string {
  return text.replace(/(\d[\d,]*?)€/g, "$1 €");
}
