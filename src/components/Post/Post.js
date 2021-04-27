import React from 'react';
import master from '../../images/master-the-blaster.jpg';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';

const Post = ({ name, img, title, tags, likeCount, heartCount }) => {

    const posttags = tags.split(',');
    console.log(posttags);

    return (
        
            <div className="shadow-md my-4 p-5">
                <p className=" md:text-4xl font-serif text-xl font-bold pt-4">{name}</p>
                <p className="text-sm mb-4">{title}</p>
                <img src={img} className="h-80 w-80 text-center" />
                <div className='flex flex-row items-center py-3 space-x-3'>
                    <ThumbUpIcon className="h-7 w-7 cursor-pointer text-blue-700" />
                    <p className="text-lg font-semibold">{likeCount}</p>
                    <HeartIcon className="h-7 w-7 cursor-pointer text-red-600" />
                    <p className="text-lg font-semibold">{heartCount}</p>
                </div>
                
            </div>
    )
}

export default Post;
