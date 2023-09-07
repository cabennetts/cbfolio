import { Separator } from "../ui/separator"
import { BsDatabase, BsPerson, BsCodeSlash } from 'react-icons/bs'
import { RiComputerLine, RiTeamLine } from 'react-icons/ri'
import { AiOutlineCloud } from 'react-icons/ai'
import { VscServerProcess, VscSymbolMisc } from 'react-icons/vsc'
import { BiBrain } from 'react-icons/bi'

export default function Skills() {
    return (
        <section>
            <h3 className='text-5xl font-bold tracking-wide p-4'>What I bring to the table</h3>
            <div className="grid grid-cols-2 auto-rows-fr gap-6">
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"><RiComputerLine />Front End</h2>
                    <Separator />
                    <ul className="list-disc p-4">
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"><VscServerProcess /> Back End</h2>
                    <Separator />
                    <ul className="list-disc p-4">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Next.js</li>
                        <li>Flask</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"><BsDatabase />Databases</h2>
                    <Separator />
                    <ul className="list-disc p-4">
                        <li>MySql</li>
                        <li>Postgresql</li>
                        <li>React</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"> <AiOutlineCloud /> Cloud</h2>
                    <Separator />
                    <ul className="list-disc p-4"> 
                        <li>Google Cloud Platform</li>
                        <li>Google Firestore</li>
                        <li>Google Firebase</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"> <RiTeamLine /> Team</h2>
                    <Separator />
                    <ul className="list-disc p-4"> 
                        <li>Team Leader</li>
                        <li>Team Oriented</li>
                        <li>Agile Methodologies</li>
                        <li>Highly Adaptable</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"> <BsCodeSlash /> Languages</h2>
                    <Separator />
                    <ul className="list-disc p-4"> 
                        <li>C++</li>                        
                        <li>C#</li>                        
                        <li>Python</li>   
                        <li>PHP</li>                     
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"> <VscSymbolMisc /> Other</h2>
                    <Separator />
                    <ul className="list-disc p-4"> 
                        <li>Excellent Communication</li>
                        <li>Creative Problem Solving</li>
                        <li>Critical Thinking</li>
                        <li>Git</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-xl ">
                    <h2 className="text-xl font-bold flex items-center gap-2"> <BiBrain /> AI/ML</h2>
                    <Separator />
                    <ul className="list-disc p-4"> 
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning Models</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}