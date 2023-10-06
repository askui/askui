import type sharp from 'sharp';

let lazilyInitializedSharpFactory: typeof sharp | undefined;

class SharpImportError extends Error {}

async function dynamicallyImportSharp(): Promise<typeof sharp> {
  try {
    const sharp = await import('sharp');
    return sharp.default;
  } catch (err: unknown) {
    throw new SharpImportError(
      'Can\'t find "sharp" module to do resizing of image!'
      + ' Please, install sharp for resizing support with'
      + ' "npm install --save-dev sharp" or "npm install --save sharp".',
    );
  }
}

export async function getSharpFactory(): Promise<typeof sharp> {
  if (lazilyInitializedSharpFactory === undefined) {
    lazilyInitializedSharpFactory = await dynamicallyImportSharp();
  }
  return lazilyInitializedSharpFactory;
}
