// 8500000 -> "Rs 85 lakh", 25000000 -> "Rs 2.5 crore"
export function formatPrice(price: number): string {
  if (price >= 10000000) {
    return `Rs ${Number((price / 10000000).toFixed(2))} crore`;
  }
  return `Rs ${Number((price / 100000).toFixed(2))} lakh`;
}

// Tomorrow as "YYYY-MM-DD" in the phone's own time zone.
export function tomorrowISO(): string {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
}

// "2026-10-22" -> "22 Oct 2026"
export function formatDate(iso: string): string {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}