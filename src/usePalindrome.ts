import { useEffect, useState } from "react"

function checkPalindrome(string: string): boolean {

    const filteredString = string
        .replaceAll(/[\s,.!\-;:()]/g, "") // retiramos los signos de puntuación
        .replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u")

    return filteredString.toLowerCase() === filteredString.toLowerCase().split("").reverse().join("")
}

export default function usePalindrome(): [string, string, React.Dispatch<React.SetStateAction<string>>, boolean] {

    const [text, setText] = useState("")
    const [isPalindrome, setIsPalindrome] = useState(true)

    useEffect(() => {
        setIsPalindrome(checkPalindrome(text))
    }, [text])

    return [
        text,
        text.split("").reverse().join(""),
        setText,
        isPalindrome
    ]
}
