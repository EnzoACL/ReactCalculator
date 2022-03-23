function ComponentHistory (results){
    const liArray = results.historial.map ( //El prop results tiene que hacer
        (item)=>{                           //referencia a historial
            return (
                <li>{item}</li>
            )
        }
    )
    return (
        <>
        <h1>Historial de resultados</h1>
        <ol>{liArray}</ol>
        </>
    )
}
export default ComponentHistory