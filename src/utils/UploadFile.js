import React, { Component } from 'react'
import Dropzone from 'react-dropzone'


class UploadFile extends Component {

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles)
    }

    render() {
        const maxSize = 10485760;

        return(
            <div className="text-center mt-5 dropzone">
                <Dropzone 
                    onDrop={this.onDrop} 
                    accept="application/pdf"
                    minSize={0}
                    maxSize={maxSize} // 10MB
                    multiple
                >
                    {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles, acceptedFiles}) => {
                        const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
                        return (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {!isDragActive && 'Cliquez ou glisser-déposer un fichier !'}
                                {isDragActive && !isDragReject && "Déposez tant que c'est chaud !"}
                                {isDragReject && "Désolé, le type de fichier n'est pas accepté ! (PDF seulement)"}
                                {isFileTooLarge && (
                                    <div className="failingUpload">
                                        <span>Echec. Attention, le fichier est trop volumineux.</span>
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
                        )
                    }}
                </Dropzone>
            </div>
        );
    }
}

export default UploadFile