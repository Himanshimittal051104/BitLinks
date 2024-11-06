"use client"
import React, { useState } from 'react';
import Link from 'next/link';
const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [generated, setGenerated] = useState(false);
  const handleGenerate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success == true) {
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
          setUrl("");
          setShortUrl("")
        } else {
          setShortUrl("")
        }
        console.log(result);
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className='bg-purple-100 my-16 p-8 mx-auto max-w-lg flex flex-col gap-4'>
      <h1 className='font-bold text-xl'>{`Generate your Short URL's`}</h1>
      <div className='flex flex-col gap-4'>
        <input type="text" className='p-1 px-2 focus:outline-purple-600 rounded-md' placeholder='Enter your URL' value={url} onChange={(e) => { setUrl(e.target.value); setGenerated(false) }}></input>
        <input type="text" placeholder='Enter your preferred short url' className='p-1 px-2 focus:outline-purple-600 rounded-md' value={shortUrl} onChange={(e) => { setShortUrl(e.target.value); setGenerated(false) }}></input>
        <button className='text-white font-bold bg-purple-700 rounded-md py-1 ' onClick={handleGenerate}>Generate</button>
      </div>
      {
        generated &&
        <code>
          Your Link :- <Link target="_blank" href={generated}>{generated}</Link>
        </code>
      }
    </div>
  )
}

export default Shorten
