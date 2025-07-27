import type { PageLoad } from './$types';
import type { LevelJLPT } from '$lib/types/levelJLPT';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ url }) => {
	const level = url.searchParams.get('level') as LevelJLPT | null;

	if (!level) {
		throw redirect(302, '/');
	}

	return { levelJLPT: level };
};