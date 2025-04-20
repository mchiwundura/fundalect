import {  getMarkdownFiles } from "@/app/api/materials/material+api"

describe("Material", () => {
    it("Gets index markdown files from all the folders", () => {
        const response = getMarkdownFiles()
        response.filePaths.forEach((filePath) => {
            expect(filePath).toMatch('.md');
            expect(response.directories.length).toBeGreaterThan(0)
        })
    })

    it("reads the index markdown files", () => {
        const response = getMarkdownFiles()
        expect(response).toBeDefined()
        response.filePaths.forEach((filePath) => {
            expect(filePath).toMatch('.md');
        })
    })
    it("Makes a json file with the content of the Index Files", () => {

    })
})