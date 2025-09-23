

export const List = ({children}: React.PropsWithChildren)=>{ // a interface aceita um generic de uma props
    return(
        <ol>
            {children}
        </ol>
    );
}