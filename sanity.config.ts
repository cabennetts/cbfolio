import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from "@sanity/vision";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: '1daesl9v',
    dataset: 'production',
    title: 'cbfolio',
    apiVersion: "2023-07-011",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas}
})

export default config