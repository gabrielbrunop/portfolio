import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAge(birthday: Date) {
  const unixEpochYear = 1970;
  const age = new Date(Date.now() - birthday.getTime());
  return Math.abs(age.getUTCFullYear() - unixEpochYear);
}