import './FileItem.css'

function FileItem({ name, type, size, sizeUnit }) {
return(
    <div className="item">
        <p>{name}</p>
        <p>{type}</p>
        <p>{size}</p>
        <p>{sizeUnit}</p>
    </div>
)
}
export default FileItem