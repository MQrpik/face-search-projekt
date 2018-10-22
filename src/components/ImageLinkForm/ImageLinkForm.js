import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This simply App detect face in your pictures. '}
            </p> <a target="_blank" href="https://clarifai.com">Powered by clarifai</a>
            <div className='center'>
            <div className='center form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' placeholder="Link to your picture"
                onChange={onInputChange} 
                 />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue' 
                onClick={onButtonSubmit}
                >Detect face!</button>
                </div>
            </div>
        </div>
    )
      
}
export default ImageLinkForm;