import { useEffect, useState } from "react"

function checkPalindrome(string: string): boolean {
    return string.toLowerCase() === string.toLowerCase().split("").reverse().join("")
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
