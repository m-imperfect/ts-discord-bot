import { inspect } from "util";

export enum levels {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
}

export let backgroundColors: { [level in levels]: number } = {
  [levels.DEBUG]: 7,
  [levels.INFO]: 6,
  [levels.WARN]: 3,
  [levels.ERROR]: 1,
  [levels.FATAL]: 1,
};

function logLine(level: levels, source: string, ...args: any[]) {
  process.stdout.write(
    `\x1b[0;30;47m ${new Date().toISOString()} \x1b[30;4${backgroundColors[level]}m ${
      levels[level]
    } \x1b[30;47m ${source} ${args
      .map(
        (arg) =>
          "\x1b[0m " +
          (typeof arg == "object" ? inspect(arg, { colors: true, depth: Infinity }) : `${arg}`)
      )
      .join("")}\x1b[0m\n`
  );
}

export function debug(source: string, ...args: any[]): void {
  logLine(levels.DEBUG, source, ...args);
}

export function info(source: string, ...args: any[]): void {
  logLine(levels.INFO, source, ...args);
}

export function warn(source: string, ...args: any[]): void {
  logLine(levels.WARN, source, ...args);
}

export function error(source: string, ...args: any[]): void {
  logLine(levels.ERROR, source, ...args);
}

export function fatal(source: string, ...args: any[]): void {
  logLine(levels.FATAL, source, ...args);
}
