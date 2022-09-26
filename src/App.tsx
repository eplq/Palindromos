import { FormEvent } from "react"
import usePalindrome from "./usePalindrome"

function App() {

    const [text, reversed, setText, isPalindrome] = usePalindrome()

    return (
        <div className="w-screen bg-gradient-to-br from-blue-800 to-yellow-800 flex justify-center">
            <main className="min-h-screen w-3/4 md:w-1/2 lg:w-1/3 flex flex-col justify-evenly items-center">
                <textarea
                    className="bg-transparent border-none outline-none w-10/12 text-3xl h-1/ text-neutral-200 placeholder:text-center placeholder:text-neutral-500"
                    defaultValue={text}
                    placeholder="Amor a Roma"
                    autoFocus
                    onInput={(ev: FormEvent<HTMLTextAreaElement>) => setText(ev.currentTarget.value)} />

                <span className={`text-3xl w-10/12 break-all text-center ${isPalindrome ? "text-lime-300" : "text-red-300"}`}>{reversed}</span>
            </main>
        </div>
    )
}

export default App
