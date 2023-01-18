import * as yaml from "https://deno.land/std@0.173.0/encoding/yaml.ts"

// @deno-types="npm:@types/markdown-it"
import MarkdownIt from "npm:markdown-it"

export interface Post {
    title: string,
    author?: string,
    public: boolean,
    published?: Date,
    tags?: string[],
    body?: string
}

export async function loadPosts(content: string): Promise<Map<string, Post>> {

    const posts = new Map<string, Post>();

    try {
        const dir = await Deno.readDir(content)
        for await (const entry of dir) {
            if (entry.isDirectory) continue;
            if (posts.get(entry.name) != undefined) return Promise.reject(`file ${entry.name} is a duplicate. Please rename one of its instances.`)

            const raw = await Deno.readFile(`${content}/${entry.name}`)
            const rawStr = new TextDecoder().decode(raw)

            if (!rawStr.includes("----")) return Promise.reject("improperly formatted header")
            const halves = rawStr.split("----")
            let body = halves[1]
            if (halves.length > 2) body = halves.slice(1).concat().join("")
            const header = yaml.parse(halves[0]) as Post
           
            const markdown = new MarkdownIt()
            header.body = markdown.render(body)

            posts.set(entry.name.trim().replace(".md", ""), header)
        }

        return Promise.resolve(posts);
    } catch (e) {
        return Promise.reject(e)
    }

}