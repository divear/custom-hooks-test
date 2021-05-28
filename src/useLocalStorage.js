import React,{useState} from 'react'

function getSavedValue(key, initialValue){

}

function useLocalStorage(initialValue) {
    const [value, setValue] = useState(initialValue)
    return [value,setValue]
}

export default useLocalStorage
