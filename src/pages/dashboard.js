import axios from 'axios'
import React, { useState } from 'react'

const postUrl = async (baseUrl, url) => {
    const res = await axios.post('https://3gchen2p0.g.tau.link/shorten', {
        url,
        base_url: baseUrl
    })
    return res.data
}

const Dashboard = () => {

    const [url, setUrl] = useState('')
    const [shortenUrl, setShortenUrl] = useState('')

    const handleSubmit = async () => {
        const data = await postUrl('3gchen2p0.g.tau.link', url);
        if (data) setShortenUrl(data.url)
        setUrl('')
    }

    const handleChange = (e) => {
        setUrl(e.target.value);
    }

    return (
        <>
            <div>
                <h2 >Paste the URL to be shortened!</h2>
                <input type="text" className='form-control' placeholder={"Enter URL here"} style={{ width: "50%" }} onChange={handleChange} value={url} />
                <button  onClick={handleSubmit}>Make it short!</button>
            </div>
            <div>
                {
                    shortenUrl && <h3>Shorten URL: <a href={shortenUrl}>{shortenUrl}</a></h3>
                }
            </div>
        </>
    )
}

export default Dashboard
