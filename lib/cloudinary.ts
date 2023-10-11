import cloudinary from "cloudinary";

type SearchResults = {
    public_id: string;
}

export async function getByTag(tag: string, maxRes: number) {
    const res = await cloudinary.v2.search
    .expression(`resource_type:image AND folder:gallery/* AND tags=${tag}`)
    .sort_by('public_id','desc')
    .with_field('tags')
    .max_results(maxRes)
    .execute() as {resources: SearchResults[]}

    if (res) {
        return res
    } else {
        return undefined
    }

}