export const CARRIER_DISPLAY_NAME_MAX_LENGTH = 50;

export function truncateVisibleText(value: string, maxLength = CARRIER_DISPLAY_NAME_MAX_LENGTH) {
	const normalized = value.trim();
	if (normalized.length <= maxLength) return normalized;

	const suffix = '...';
	return `${normalized.slice(0, maxLength - suffix.length).trimEnd()}${suffix}`;
}

export function formatCarrierDisplayName(value: string | null | undefined) {
	return truncateVisibleText(value ?? 'Porteur non renseigné');
}
