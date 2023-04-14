import './Title.css'

export type titulo = {
    title: string;
    desc: string;
};

export default function Title(props: titulo){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
        </div>
    )
}

