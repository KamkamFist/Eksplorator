import {useState} from 'react';
import './FolderItem.css'
import FileItem from './FileItem';

function FolderItem({name, files}) {
    const [isExpanded, setIsExpanded] = useState(false)
    
    function handleExpanded(){
        setIsExpanded(!isExpanded)
    }
return(
    <>
    <div  className="item">
        <p>{name}</p>
        <p>Ilosc elemetow: {files}</p>
        <p>Rozmiar Folderu: 1024mb</p>
        <p onClick={handleExpanded}>
            { isExpanded ? "😘" : "😒"}
        </p>
        <div className="folder-content">
            {isExpanded && files.map(
                (node) => {
            if(node.type === "file") {
              return <FileItem key={node.children} name={node.name} type={node.type} size={node.size}/>
            }
              return <FolderItem name={node.name} children={node.children}></FolderItem>
          }
        )
      }
        </div>

    </div>
    </>
)
}
export default FolderItem