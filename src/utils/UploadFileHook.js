import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

const UploadFileHook = () => {
    const maxSize = 10485760;

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    const { isDragActive, 
            getRootProps, 
            getInputProps, 
            isDragReject, 
            acceptedFiles, 
            rejectedFiles } = useDropzone({
        onDrop,
        accept: 'image/png',
        minSize: 0,
        maxSize,
    });

    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
    
    return (
        <div className="container text-center mt-5 dropzone">
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && 'Cliquez ou glisser-déposer un fichier pour l\'envoyer !'}
            {isDragActive && !isDragReject && "Déposez tant que c'est chaud !"}
            {isDragReject && "Déposez tant que c'est chaud !"}
            {isFileTooLarge && (
                <div className="text-danger mt-2 failingUpload">
                Désolé, Le fichier est trop volumineux.
                </div>
            )}


            <ul className="list-group mt-2">
                {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                    <li className="list-group-item list-group-item-success">
                    {acceptedFile.name}
                    </li>
                ))}
            </ul>

            </div>



        </div>
    );
};

export default UploadFileHook;