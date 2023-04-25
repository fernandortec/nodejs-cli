import { openSync } from "fs"

export const createFile = (filePath: string): void => {
  openSync(filePath, "w")
  console.log('An empty file has been created successfully!')
}