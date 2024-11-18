import MainTittle from "../components/titles/MainTittle"

export default function Contact(){
    return(
        <div className="flex flex-col justify-center items-center gap-4 mb-28" id="contact">
            <MainTittle text="Contato" />
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-xl font-bold text-green-1">
                        Email
                    </h2>
                    <a className="text-lg font-light text-green-1 hover:font-bold transition-all hover:underline" rel="noopener noreferrer" href="mailto:jonatasgollmann@gmail.com">
                        jonatasgollmann@gmail.com
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-xl font-bold text-green-1">
                        LinkedIn
                    </h2>
                    <a className="text-lg font-light text-green-1 hover:font-bold transition-all hover:underline" href="https://www.linkedin.com/in/jonatas-gollmann/" rel="noopener noreferrer">
                      linkedin.com/in/jonatas-gollmann/
                    </a>
                </div>
            </div>
        </div>
                
    )
}