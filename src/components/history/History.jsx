function componentHistory (result){
    let liArray = result.map (
        (item)=> <li>{item}</li>
    )
    return (
        <>
        <ol>{liArray}</ol>
        </>
    )
}
export default componentHistory