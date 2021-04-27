import React, { useContext } from 'react';
import Post from './Post';
import master from '../../images/master-the-blaster.jpg';
import yaarayum from '../../images/yaarayum-ivalo-azhaga.jpg';
import { GlobalContext } from '../../context/GlobalState';

const Posts = () => {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    const newPost = [
        {
            name: 'Karthikeyan',
            img: {master},
            likeCount:'20',
            heartCount:'30'
        },
        {
            name: 'Linga',
            img:{yaarayum},
            likeCount:'40',
            heartCount:'20'
        },
    ]

    return (
        <div className="font-mono h-full mx-auto p-5">
            {
                transactions.map(post => (
                    <Post key={post.id} name={post.user} img={post.image} title={post.title} tags={post.tags} likeCount={post.likeCount} heartCount={post.heartCount} />
                ))
            }
        </div>
    )
}

export default Posts;
