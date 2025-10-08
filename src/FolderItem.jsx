import {useState} from 'react';
import './FolderItem.css'
import FileItem from './FileItem';

function FolderItem() {
    const [isExpanded, setIsExpanded] = useState(false)
    const files = [
        {name: "abc", type: "text", size: 1024, sizeUnit: "kb"},
        {name: "CDE", type: "EDFE", size: 3, sizeUnit: "tb"}
    ]

    function handleExpanded(){
        setIsExpanded(!isExpanded)
    }
return(
    <>
    <div  className="item">
        <p>Nazwa pliku</p>
        <p>Ilosc elemetow: ??</p>
        <p>Rozmiar Folderu: 1024mb</p>
        <p onClick={handleExpanded}>
            { isExpanded ? "😘" : "😒"}
        </p>
        <div className="folder-content">
            {isExpanded && files.map(
                (file) => (
                    <FileItem key={file.id}/>
                )
            )}
        </div>

    </div>
    </>
)
}
export default FolderItem