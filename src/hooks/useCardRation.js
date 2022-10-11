import { useCallback, useState } from "react"

export const useCardRation = (initialRation)=>{
    const [aspectRation, setAspectRation] = useState(initialRation)

    const calculateRatio = useCallback((height, width)=>{
        if(height && width){
            const isLandscape = height <= width ;
            const ratio = isLandscape ? (width/ height) : (height / width);

            setAspectRation(ratio)
        }
    }, [])

    return [aspectRation, calculateRatio]
}