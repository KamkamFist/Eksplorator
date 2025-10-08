import FileItem from "./FileItem";
import FolderItem from "./FolderItem";
import FileTree from "./FileTree.jsx";

function FileExplorer({fileSystem}) {
    return(
        <>
        <FileTree fileSystem={fileSystem} />
        </>
    )
}
export default FileExplorer