import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(dateStr: string) {
    if (!dateStr) return '';
    try {
        return format(parseISO(dateStr), 'MMMM dd, yyyy');
    } catch {
        return dateStr;
    }
}
