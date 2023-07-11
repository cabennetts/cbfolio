export default async function getAllImages(pageNum: number) {
    const res = await fetch(`https://api.unsplash.com/users/cabennetts/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30&order_by=popular&page=${pageNum}`)
    
    if(!res.ok) throw new Error('failed to fetch data')
    
    return res.json()
}