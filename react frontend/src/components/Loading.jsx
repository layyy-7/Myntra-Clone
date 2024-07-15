function Loading()
{
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-border m-4" role="status" style={{height:"100px",width:"100px"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
      </div>
    );
}

export default Loading;