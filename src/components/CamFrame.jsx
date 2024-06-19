
import { useState, useRef, useCallback } from 'react';
import frameImage from '../../images/frame.png';

import Webcam from "react-webcam";





function CamFrame() {

    const videoConstraints = {
        
        facingMode: "user"
      }


    const webcamRef = useRef(null);
    const [img, setImage] = useState(null);


// capture
    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    },[webcamRef,setImage]);

    const retake = () => {
        setImage(null)
    }

    const save = () => {
        if(img) {

            const link = document.createElement('a');
            link.href = img;
            link.download = 'captured_image.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
            setTimeout(()=>setImage(null),1000)
        }
    }

    

  return (
    <div className="flex flex-wrap h-full w-full bg-teal-00 
    
    sm:flex-row sm:h-[80%] 
    
    ">
        
    {/* first */}
        <div className="bg-orange-00 flex flex-wrap flex-row justify-center px-1 py-1 
        
            sm:basis-1/3 sm:order-2 sm:z-[5] sm:h-full

        ">
            <img className='z-10 sm:h-full' src= {frameImage} alt='frame'></img>
            <div className=' absolute flex flex-wrap bg-violet-00/40 h-[22rem] w-full px-5 mt-24 

                sm:absolute sm:w-[26rem] 
            
            
            '>
                {
                    img ? (
                        <img src={img} alt='capture'/>
                    ): (
                        <Webcam   
                    audio = {false}
                    ref={webcamRef}
                    screenshotFormat='image/jpeg'
                    screenshotQuality={1}
                    videoConstraints={videoConstraints}
                    
                />
                    )
                }
                
                
            </div>
        </div>

        {/* second */}

        <div className="flex flex-wrap flex-row bg-red-00 w-full h-16 justify-center gap-3
        
        sm:basis-1/3 sm:order-1 sm:flex-col sm:w-full sm:h-60 sm:px-5
        sm:items-end sm:self-center


        
        ">
            <button className='bg-slate-100/70 hover:bg-slate-100/100 text-lg  rounded basis-1/4 
            text-pink-700

            sm:basis-1/5 sm:rounded-tl-[80px] sm:rounded-br-[80px]
            sm:text-3xl sm:font-semibold sm:w-56 sm:px-2 sm:py-1
            '
            onClick={capture}
            >CAPTURE</button>
            <span className='hidden sm:block bg-white min-w-[66rem] min-h-[2px] absolute right-0 mt-[-138px]  '/>

            <button className='bg-slate-100/70 hover:bg-slate-100/100 text-lg  rounded basis-1/4  text-pink-700
            sm:basis-1/5 sm:rounded-tl-[80px] sm:rounded-br-[80px]
            sm:text-3xl sm:font-semibold sm:w-56 sm:px-2 sm:py-1

            '
            onClick={retake}>RETAKE</button>

            <span className='hidden sm:block bg-white min-w-[66rem] min-h-[2px] absolute right-0 mt-[-12px]  '/>

            <button className='bg-slate-100/70 hover:bg-slate-100/100 text-pink-700 text-lg  rounded basis-1/4 
            hidden sm:block sm:basis-1/5
            sm:rounded-tl-[80px] sm:rounded-br-[80px]
            sm:text-3xl sm:font-semibold sm:w-56 sm:px-2 sm:py-1

            '
            >POST</button> 
            <span className='hidden sm:block bg-white min-w-[66rem] min-h-[2px] absolute right-0 mt-[105px]  '/>

            <button className='bg-slate-100/70 hover:bg-slate-100/100 text-pink-700 text-lg  rounded basis-1/4
            sm:basis-1/5 sm:rounded-tl-[80px] sm:rounded-br-[80px]
            sm:text-3xl sm:font-semibold sm:w-56 sm:px-2 sm:py-1
             '
            onClick={save}
            >SAVE</button> 
            <span className='hidden sm:block bg-white min-w-[66rem] min-h-[2px] absolute right-0 mt-[225px]  '/>
            
            
                   
        </div>

        {/* third */}
        
        
    </div>
  )
}

export default CamFrame