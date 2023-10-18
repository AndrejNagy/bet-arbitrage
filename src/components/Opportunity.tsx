function Opportunity(props: any){
    return <div style={{margin: "auto", border: "2px solid black"}}>
        <h1 style={{textAlign: "center"}}>{props.zapas}</h1>
        <h2 style={{textAlign: "center"}}>{props.kurz1} - {props.kurz2} - {props.kurz3}</h2>
    </div>
}

export default Opportunity;