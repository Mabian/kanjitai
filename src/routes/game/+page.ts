import type { PageLoad } from './$types';
import type { LevelJLPT } from '$lib/types/levelJLPT';
import { redirect } from '@sveltejs/kit';
import type { Kanji } from '$lib/models/Kanji';

export const load: PageLoad = async ({ url, fetch }) => {
	const level = url.searchParams.get('level') as LevelJLPT | null;

	if (!level) {
		throw redirect(302, '/');
	}

	const levelInNumber = Number(level.slice(1));

	const kanjiJsonResource = await fetch('/data/kanji-list.json');
	let kanjiList: Kanji[] = await kanjiJsonResource.json();
	kanjiList = kanjiList.filter(singleKanji => singleKanji.jlptLevel && singleKanji.jlptLevel === levelInNumber);

	return { levelJLPT: level, kanjiList: kanjiList };
};