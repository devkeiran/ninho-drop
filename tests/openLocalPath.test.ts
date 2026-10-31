import { afterEach, describe, expect, it, vi } from 'vitest'
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const { openPath } = vi.hoisted(() => ({ openPath: vi.fn() }))
vi.mock('electron', () => ({ shell: { openPath } }))
import { openLocalPath } from '../electron/main/openLocalPath'

const roots: string[] = []
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'edgedrop-open-'))
  roots.push(root)
  return root
}
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
  vi.resetAllMocks()
})

describe('open local file or folder', () => {
  it('opens a file with spaces and Unicode using its default application', async () => {
    const path = join(fixture(), 'minhas anotações.txt')
    writeFileSync(path, 'hello')
    openPath.mockResolvedValue('')
    expect(await openLocalPath(path)).toBe(true)
    expect(openPath).toHaveBeenCalledWith(path)
  })
  it('opens the folder itself', async () => {
    const path = join(fixture(), 'folder')
    mkdirSync(path)
    openPath.mockResolvedValue('')
    expect(await openLocalPath(path)).toBe(true)
    expect(openPath).toHaveBeenCalledWith(path)
  })
  it('rejects missing files, relative paths, URLs and invalid inputs without opening anything', async () => {
    for (const path of [join(fixture(), 'missing.txt'), 'package.json', 'https://example.com', '', null, 123, 'C:\\bad\u0000.txt']) {
      expect(await openLocalPath(path)).toBe(false)
    }
    expect(openPath).not.toHaveBeenCalled()
  })
  it('reports failure when Windows cannot open the file', async () => {
    const path = join(fixture(), 'file.txt')
    writeFileSync(path, '')
    openPath.mockResolvedValue('No application associated')
    expect(await openLocalPath(path)).toBe(false)
  })
  it('handles a rejected shell operation', async () => {
    const path = join(fixture(), 'file.txt')
    writeFileSync(path, '')
    openPath.mockRejectedValue(new Error('Access denied'))
    expect(await openLocalPath(path)).toBe(false)
  })
})
