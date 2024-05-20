import Link from "next/link";


export default function StudentInfo(){
    const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
    return(
        <div>
            <h1>Tan Nguyen</h1>
            <Link className = {linkStyles} href="https://github.com/Tan-Nguyn/cprg306-assignments.git" >Visit My Github Repository</Link>
        </div>
    );
}