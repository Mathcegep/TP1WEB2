
function TableauChild(props) {
    return (
        <tr>
           <td> <p>{props.cel1}</p></td>
           <td> <p>{props.cel2}</p></td>
           <td> <p>{props.cel1 * props.cel2}</p></td>
        </tr>
    );
}

export default TableauChild;