import React, { useState, useContext } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalState';

const Upload = () => {

    const { addTransaction } = useContext(GlobalContext);

    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    //const [postData, setPostData] = useState({id: Math.floor(Math.random() * 1000000000), creator: '', title: '', tags: '', selectedFile: '' });

    const clear = () => {
        //setPostData({id: '', creator: '', title: '', message: '', tags: '', selectedFile: '' });
        setUser('');
        setTitle('');
        setTags('');
        setImage('');
    };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Math.floor(Math.random() * 1000000000),
            user: user,
            title: title,
            tags: tags,
            image: image,
            likeCount: 10,
            heartCount: 20

        }

        addTransaction(newPost);
      };

    return (
        <div className="mt-5 mx-auto space-y-5 shadow-lg p-5 max-w-max my-auto flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-blue-500 underline uppercase">Upload</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                <TextField label="Shot By" color="primary" fullWidth variant="outlined" value={user} onChange={(e) => setUser(e.target.value)} />
                <TextField label="Title" color="primary" fullWidth variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                <TextField label="Tags" variant="outlined" color="primary" fullWidth value={tags} onChange={(e) => setTags(e.target.value)} />
                <FileBase type="file" multiple={false}  onDone={({ base64 }) => setImage(base64)}/>
                <Button variant="contained" color="primary" type="submit">SUBMIT</Button>
                <Button variant="contained" color="secondary" onClick={clear} size="small" >CLEAR</Button>
            </form>
        </div>
    )
}

export default Upload;
//onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}