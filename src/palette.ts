import paletteJson from "@srcery-colors/srcery-palette/palette.json" with { type: "json" };

export type Palette = typeof paletteJson;
export type PaletteColor = Palette[keyof Palette];

export const palette: Palette = paletteJson;
