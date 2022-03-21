import React,{useState, useEffect} from 'react';
import { Image as Img } from 'theme-ui';

function getWindowDimensions(){
  const { innerWidth:width, innerHeight:height } = window
  return {
      width,
      height
  }
}

export default function Image({ src, ...rest }) {
    const [width, setWidth] =useState()
    const [height,setHeight] = useState()

    useEffect(()=>{
        const {width, height} = getWindowDimensions()
        setWidth(width)
        setHeight(height)
    },[])

    useEffect(()=>{
        function handleResize(){
            const {width, height} = getWindowDimensions()
            setWidth(width)
            setHeight(height)
        }

        window.addEventListener("resize",handleResize)
        return ()=> window.removeEventListener("resize",handleResize)
    },[])

    if(width && height){
        return <Img src={src} width={width} height={height} sx={styles.image} {...rest} />;
    }

    return null
}


const styles ={
    image:{
        postion:"absolute"
    }
}