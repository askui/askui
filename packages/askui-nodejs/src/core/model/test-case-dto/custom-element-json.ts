export interface CustomElementJson {
  customImage: string,
  name?: string | undefined,
  threshold?: number | undefined,
  rotationDegreePerStep?: number | undefined,
  imageCompareFormat?: 'RGB' | 'grayscale' | undefined,
  mask?: ({ x: number; y: number; })[] | undefined,
}
