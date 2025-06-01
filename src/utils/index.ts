import type { LANGUAGE } from '@/types'

export const downloadResume = (locale: LANGUAGE): void => {
	const ESP_RESUME_ID = '1aFqOlkZd7NWRdQxCVgBmezFkiHt43AH2'
	const ENG_RESUME_ID = '1rDCtdbiSRMxAAeqGSDDnPjE14nsiudEu'
	const resumeId = locale === 'en' ? ENG_RESUME_ID : ESP_RESUME_ID

	window.location.href = `https://drive.google.com/file/d/${resumeId}/view?usp=sharing`
}
