import {nanoid} from "nanoid";
import URL from "../models/url.js";

async function generateShortUrl(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error:"URL is required"});
    }
    const shortID = nanoid(8);
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitedHistory:[], 
    });
    return res.json({newShortUrl: "http://localhost:5000/shortId/"+shortID});
}

async function handleRedirecUrl(req,res){
    const shortId = req.params.shortId;
    console.log(req.params);
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            },
        },
    })

    res.redirect(entry.redirectUrl);    
}

export {generateShortUrl as generateShortUrl, handleRedirecUrl as handleRedirecUrl};