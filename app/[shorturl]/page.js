import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shortUrl: shorturl})
    console.log(doc)
    if(doc){
        const destinationUrl = new URL(doc.url.startsWith('http') ? doc.url : `http://${doc.url}`);
        redirect(destinationUrl.toString());
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
  }