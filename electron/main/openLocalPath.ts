import { shell } from 'electron'
import { isAbsolute } from 'node:path'
import { isExistingFilePath } from './pathValidation'

/** Open a local file or directory using the operating system's default app. */
export async function openLocalPath(path: unknown): Promise<boolean> {
  try {
    if (!isExistingFilePath(path) || !isAbsolute(path)) return false
    return (await shell.openPath(path)) === ''
  } catch {
    return false
  }
}
