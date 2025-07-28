export interface Kanji {
	"kanji": string,
	"strokes": number,
	"grade"?: number,
	"freq"?: number,
	"jlptLevel"?: number,
	"meanings"?: string[],
	"readingsOn"?: string[],
	"readingsKun"?: string[],
	"wkLevel"?: number,
	"wkMeanings"?: string[],
	"wkReadingsOn"?: string[],
	"wkReadingsKun"?: string[],
	"wkRadicals"?: string[]
}