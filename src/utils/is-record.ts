export default function isRecord(
  value: unknown,
): value is Record<number | string, unknown> {
  return typeof value === 'object' && value !== null;
}
